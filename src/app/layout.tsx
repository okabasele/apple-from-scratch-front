import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/partials/Header";

const ibm = IBM_Plex_Sans({weight:['100', '200', '300', '400', '500', '600', '700'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple (France)",
  description: "L'univers Apple : de l'iPhone à l'iPad, l'Apple Watch, le Mac et l'Apple TV en passant par les accessoires, le divertissement et l'assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
