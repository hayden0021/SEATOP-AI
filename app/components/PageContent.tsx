import SiteEffects from "./SiteEffects";
import { MotionPage } from "./PremiumMotion";
import { pageEnhancements } from "@/lib/enhancements";
import type { PageKey } from "@/lib/pages";
import { pageHtml } from "@/lib/pages";

export default function PageContent({ pageKey }: { pageKey: PageKey }) {
  return (
    <MotionPage>
      <div dangerouslySetInnerHTML={{ __html: pageHtml[pageKey] }} />
      {pageEnhancements[pageKey] ? <div dangerouslySetInnerHTML={{ __html: pageEnhancements[pageKey] }} /> : null}
      <SiteEffects />
    </MotionPage>
  );
}
