import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

export const metadata: Metadata = {
  title: "A Christmas Ancestry | Advent Calendar",
  description: "Daily devotionals exploring the genealogy of Jesus Christ through an interactive advent calendar",
  keywords: ["advent calendar", "Christmas", "devotional", "genealogy", "Jesus Christ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-christmas-snow antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
