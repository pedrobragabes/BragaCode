import type { ContactPayload } from "@/lib/validation";

const RETRY_DELAYS_MS = [200, 500];

export class DeliveryError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly retryable = false,
  ) {
    super(message);
    this.name = "DeliveryError";
  }
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function isRetryableStatus(status: number) {
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

export async function fetchWithRetry(url: string, init: RequestInit) {
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const response = await fetch(url, init);
      if (response.ok) return response;

      const retryable = isRetryableStatus(response.status);
      if (!retryable || attempt === RETRY_DELAYS_MS.length) {
        throw new DeliveryError("delivery_failed", response.status, retryable);
      }
    } catch (error) {
      if (error instanceof DeliveryError) throw error;
      if (attempt === RETRY_DELAYS_MS.length) throw new DeliveryError("delivery_unavailable", undefined, true);
    }

    await wait(RETRY_DELAYS_MS[attempt]);
  }

  throw new DeliveryError("delivery_unavailable", undefined, true);
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hmacSha256(value: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

export function createLeadBody(data: ContactPayload) {
  return JSON.stringify({
    id: data.submissionId,
    source: "bragacode-site",
    name: data.name,
    company: data.company || undefined,
    email: data.email,
    phone: data.phone || undefined,
    projectType: data.projectType,
    message: data.message,
    consent: true,
  });
}

export async function deliverWebhook(data: ContactPayload, webhook: string, secret: string) {
  const body = createLeadBody(data);
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = await hmacSha256(`${timestamp}.${body}`, secret);

  await fetchWithRetry(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": `contact/${data.submissionId}`,
      "X-BragaCode-Signature": `sha256=${signature}`,
      "X-BragaCode-Timestamp": timestamp,
    },
    body,
  });
}
