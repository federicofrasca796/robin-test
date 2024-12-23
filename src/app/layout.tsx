import "@/app/globals.css";
import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="min-h-[calc(100vh-128px-32px-80px-24px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
