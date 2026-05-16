import { footerHtml } from "@/lib/footer";

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
