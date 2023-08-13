import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/app/components/Header";
import { Providers } from "./providers";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuiliang's Blog",
  description: "Created by Kuiliang Zhang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} min-h-screen dark:bg-slate-800`}>
        <Providers>
          <Header />
          <main className="md:px-12 max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
