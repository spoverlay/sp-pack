import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pack.spoverlay.ru"),
  title: "SP Pack",
  description: "Общий ресурс пак сервера СП5",
  keywords: "сп пак, ресурс пак СП, spoverlay, sp pack, sppack, сппак, SP.zip, скачать ресурс пак сп, СП5, СП4",
  openGraph: {
    title: "SP Pack",
    description: "Общий ресурс пак сервера СП5",
    images: "https://pack.spoverlay.ru/link-cover.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Pack",
    description: "Общий ресурс пак сервера СП5",
    images: [{ url: "https://pack.spoverlay.ru/link-cover.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geologica.variable} antialiased overflow-x-hidden hide-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
