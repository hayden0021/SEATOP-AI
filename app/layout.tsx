import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NeuralCanvas from "./components/NeuralCanvas";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NeuralCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
