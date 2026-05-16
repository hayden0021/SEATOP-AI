import SiteEffects from "./SiteEffects";
import type { PageKey } from "@/lib/pages";
import { pageHtml } from "@/lib/pages";

export default function PageContent({ pageKey }: { pageKey: PageKey }) {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: pageHtml[pageKey] }} />
      <SiteEffects />
    </main>
  );
}
