import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "./components/site-shell";

export const metadata: Metadata = {
  title: "Skin Theory DSM | Personalized Aesthetic Skincare",
  description:
    "Thoughtful aesthetic skincare, custom facials, and advanced treatments in Johnston, Iowa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
