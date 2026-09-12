import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpsCove Solutions — outsourced support teams for UK and US companies",
  description:
    "OpsCove runs voice, helpdesk and back office teams from Mohali for UK and US companies. Start with a pilot team and commit only when the numbers hold.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body style={{ fontFamily: "var(--font-archivo), Helvetica, Arial, sans-serif" }}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
