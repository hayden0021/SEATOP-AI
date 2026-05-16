import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
};

export default function Page() {
  return <PageContent pageKey="contact" />;
}
