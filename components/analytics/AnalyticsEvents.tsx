"use client";

import { useEffect } from "react";

type AnalyticsProperties = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: AnalyticsProperties }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const eventNames = {
  whatsapp: "WhatsApp Click",
  contact: "Contact Form Submitted",
  project: "Case Click",
  service: "Service Click",
} as const;

export function trackAnalyticsEvent(event: string, properties: AnalyticsProperties = {}) {
  window.plausible?.(event, { props: properties });
  window.gtag?.("event", event.toLowerCase().replace(/\s+/g, "_"), properties);
}

export function trackContactSubmission(source: string, projectType: string) {
  trackAnalyticsEvent(eventNames.contact, { source, project_type: projectType });
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const explicitEvent = link.dataset.analyticsEvent;
      let eventName = explicitEvent;
      let destination = "";

      try {
        const url = new URL(link.href, window.location.origin);
        destination = url.origin === window.location.origin ? url.pathname : url.hostname;

        if (!eventName && url.hostname === "wa.me") eventName = eventNames.whatsapp;
        if (!eventName && /^\/projetos\/[^/]+$/.test(url.pathname)) eventName = eventNames.project;
        if (!eventName && /^\/servicos\/[^/]+$/.test(url.pathname)) eventName = eventNames.service;
      } catch {
        return;
      }

      if (!eventName) return;
      trackAnalyticsEvent(eventName, {
        destination,
        source_path: window.location.pathname,
        placement: link.dataset.analyticsPlacement || link.textContent?.trim().slice(0, 80) || "link",
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
