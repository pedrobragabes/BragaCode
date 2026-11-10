import type { Metadata } from "next";
import { StudioContactPage } from "@/components/contact/StudioContactPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Conte o processo, o volume e onde está o retrabalho. Fale com Pedro Braga sobre sites, e-commerce, sistemas, integrações ou automações.",
  path: "/contato",
});

export default function ContactPage() {
  return <StudioContactPage />;
}
