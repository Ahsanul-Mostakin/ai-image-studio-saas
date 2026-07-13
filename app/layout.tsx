import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { clerkModalAppearance } from "@/lib/clerk-modal-appearance";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Image Studio — Transform Images Instantly",
  description:
    "A premium studio for high-fidelity AI image restyling with curated presets, private results, and a calm, polished workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ClerkProvider appearance={clerkModalAppearance}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
