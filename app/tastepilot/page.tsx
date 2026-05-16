import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = {
  title: pageMeta.tastepilot.title,
  description: pageMeta.tastepilot.description,
};

export default function Page() {
  return <PageContent pageKey="tastepilot" />;
}
