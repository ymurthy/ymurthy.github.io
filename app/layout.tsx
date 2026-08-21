import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ymurthy.github.io"),
  title: {
    default: "Yashaswini Murthy | UT Austin",
    template: "%s | Yashaswini Murthy",
  },
  description:
    "Yashaswini Murthy is an Assistant Professor in Operations Research at The University of Texas at Austin.",
  openGraph: {
    title: "Yashaswini Murthy | UT Austin",
    description:
      "Assistant Professor in Operations Research at The University of Texas at Austin.",
    type: "website",
    images: [
      {
        url: "/assets/images/yashaswini-murthy.jpg",
        alt: "Yashaswini Murthy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Yashaswini Murthy | UT Austin",
    description:
      "Assistant Professor in Operations Research at The University of Texas at Austin.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#bf5700",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
