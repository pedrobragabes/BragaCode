import type { ComponentProps } from "react";

/** Local WebP assets are optimized at authoring time; no browser image runtime is needed. */
export function StaticImage({ priority = false, loading, alt = "", ...props }: ComponentProps<"img"> & { priority?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element -- Preoptimized local assets, served directly by the Worker.
  return <img {...props} alt={alt} loading={loading ?? (priority ? "eager" : "lazy")} fetchPriority={priority ? "high" : undefined} />;
}
