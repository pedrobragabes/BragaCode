import * as Sentry from "@sentry/cloudflare";

type OperationalErrorContext = {
  operation: "contact_delivery" | "turnstile_verification";
  provider?: "webhook" | "resend" | "none";
  retryable?: boolean;
  status?: number;
};

type SanitizableEvent = Parameters<NonNullable<Parameters<typeof Sentry.init>[0]["beforeSend"]>>[0];

/** Remove request and identity fields before an event leaves the Worker. */
export function sanitizeMonitoringEvent(event: SanitizableEvent) {
  delete event.user;
  delete event.extra;

  if (event.request) {
    delete event.request.cookies;
    delete event.request.data;
    delete event.request.headers;
    delete event.request.query_string;
  }

  event.breadcrumbs = event.breadcrumbs?.map((breadcrumb) => ({
    category: breadcrumb.category,
    level: breadcrumb.level,
    message: breadcrumb.message,
    timestamp: breadcrumb.timestamp,
    type: breadcrumb.type,
  }));

  return event;
}

/** Capture only operational metadata. Never pass lead fields to this function. */
export function reportOperationalError(error: unknown, context: OperationalErrorContext) {
  const safeError = error instanceof Error ? error : new Error("operational_error");

  Sentry.withScope((scope) => {
    scope.setTag("operation", context.operation);
    scope.setTag("provider", context.provider ?? "none");
    scope.setTag("retryable", String(context.retryable ?? false));
    if (context.status) scope.setTag("status", String(context.status));
    Sentry.captureException(safeError);
  });
}
