import { Metadata } from "next";

// TODO: can add in favicon, opengraph-image, robots.txt or sitemap.xml, refer to
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: process.env.SAAS_DESCRIPTION,
  description: process.env.SAAS_DESCRIPTION,
}

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SiteLayout;
