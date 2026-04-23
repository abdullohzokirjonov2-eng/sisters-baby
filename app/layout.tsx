import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sister's Baby | Xususiy Bog'cha",
  description: "Bolangizning eng yaxshi ta'lim va parvarishini ta'minlaymiz. Professional va mehribon pedagoglar jamoasi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="bg-[#fffbf7] text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
