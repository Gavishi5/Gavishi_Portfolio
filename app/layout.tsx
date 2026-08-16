import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gavishi Raj | React Native Developer & Mobile Application Engineer",
  description:
    "Portfolio of Gavishi Raj, Senior React Native & Mobile Application Developer with 3+ years of experience building production Android and iOS applications across HRMS, POS, CRM, and Smart Society platforms.",
  keywords: [
    "Gavishi Raj",
    "React Native Developer",
    "Mobile Application Developer",
    "Flutter",
    "Kotlin",
    "TypeScript",
    "Android Engineer",
    "iOS Developer",
    "Mobile Portfolio",
  ],
  authors: [{ name: "Gavishi Raj" }],
  openGraph: {
    title: "Gavishi Raj | React Native Developer & Mobile Application Engineer",
    description:
      "Cross-platform React Native Mobile Application Engineer with 3+ years of production experience shipping apps to Google Play Store.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavishi Raj | React Native & Mobile Application Engineer",
    description:
      "3+ years experience building cross-platform mobile apps for Android & iOS across HRMS, POS, and CRM domains.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#070912] text-gray-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
