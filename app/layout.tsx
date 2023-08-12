import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/app/components/Header";

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
    <html lang="en">
      <body className={`${nunito.className} dark:bg-slate-800`}>
        <Header />
        {/*<main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">*/}
        <main className="px-12 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
