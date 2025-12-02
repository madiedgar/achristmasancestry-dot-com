import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
