export type StudioIconName = "web" | "integration" | "commerce" | "automation" | "site" | "infra";

const paths: Record<StudioIconName, string> = {
  web: "M3 4h18v16H3zM3 9h18M7 14l2 2-2 2m5 0h4",
  integration: "M3 3h6v6H3zM15 15h6v6h-6zM9 6h6a3 3 0 0 1 3 3v6m-6-3 3 3 3-3",
  commerce: "M4 8h16l-1 13H5L4 8Zm4 1V6a4 4 0 0 1 8 0v3",
  automation: "M13 2 5 13h6l-1 9 9-12h-6l1-8z",
  site: "M3 4h18v16H3zM3 9h18m-14 4h6m-6 3h10",
  infra: "M4 3h16v7H4zM4 14h16v7H4zM8 6.5h.01M8 17.5h.01m4-11h4m-4 11h4",
};

export function StudioIcon({ name }: { name: StudioIconName }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
