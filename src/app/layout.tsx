import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white flex flex-col min-h-screen"
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow pb-20">
          <div className="max-w-screen-2xl mx-auto px-4 py-8">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

