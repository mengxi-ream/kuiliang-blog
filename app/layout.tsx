import "./globals.scss";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "@/app/components/Header";
import { Providers } from "./providers";
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

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
      <body
        className={`${nunitoSans.className} min-h-screen dark:bg-slate-900`}
      >
        <Providers>
          <Header />
          <main className="px-6 md:px-12 max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
