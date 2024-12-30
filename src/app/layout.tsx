import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "SP Pack",
  description: "Общий ресурс пак сервера СП5",
  openGraph: {
    title: "SP Pack",
    description: "Общий ресурс пак сервера СП5",
    images: [
      "/link-cover.png"
    ]
  }
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
