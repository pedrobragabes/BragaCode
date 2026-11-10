import type { Metadata } from "next";
import { StudioContactPage } from "@/components/contact/StudioContactPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Contact", description: "Describe the process, volume and rework. Talk to Pedro Braga about websites, e-commerce, systems, integrations or automation.", path: "/en/contact" });

export default function EnglishContactPage() {
  return <StudioContactPage english />;
}
