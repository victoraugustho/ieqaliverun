import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEQ Alive Run",
  description: "Landing page de chamada para inscrições da IEQ Alive Run.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
