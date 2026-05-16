import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
};

export default function Page() {
  return <PageContent pageKey="home" />;
}
