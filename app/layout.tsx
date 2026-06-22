import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheemuuuu",
  description: "For Shez",
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full antialiased">
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
      </head>
      <body className="flex min-h-full w-full flex-col bg-black font-sans text-white">{children}</body>
    </html>
  );
}
