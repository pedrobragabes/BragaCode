declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { ArticleFrontmatter } from "@/content/articles";

  export const frontmatter: ArticleFrontmatter;
  const MDXContent: ComponentType;
  export default MDXContent;
}
