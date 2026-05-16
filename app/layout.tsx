import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NeuralCanvas from "./components/NeuralCanvas";
import FloatingBackground from "./components/FloatingBackground";

export const metadata: Metadata = {
  title: {
    default: "SEATOP AI",
    template: "%s | SEATOP AI",
  },
  description: "SEATOP AI builds AI automation, AI commerce and AI food discovery experiences.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <FloatingBackground />
        <NeuralCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
