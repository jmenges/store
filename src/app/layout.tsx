import type { Metadata } from "next";
import { Noto_Sans_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const notoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Store - Portfolio",
  description: "Discover your next look",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body
        className={`${notoMono.variable} ${roboto.variable} bg-white font-sans text-black antialiased`}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
