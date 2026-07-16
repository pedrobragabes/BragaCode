import Script from "next/script";
import { AnalyticsEvents } from "./AnalyticsEvents";

export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;

  if (provider === "plausible" && process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL) {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}",
          }}
        />
        <Script defer src={process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL} strategy="afterInteractive" />
        <AnalyticsEvents />
      </>
    );
  }

  if (provider === "ga" && process.env.NEXT_PUBLIC_GA_ID) {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
        </Script>
        <AnalyticsEvents />
      </>
    );
  }

  return null;
}
