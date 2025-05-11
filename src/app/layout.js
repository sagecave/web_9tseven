import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "../../components/Hamburger/HamburgerMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "9TSEVEN find freedom and happiness",
  description: "A clothing brand that helps you find freedom and happiness through a community of like-minded people — and by encouraging personal growth through running.",
  authors: [{ name: "The Foo Fighters" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  generator: "Next.js",
  applicationName: "9TSEVEN",
  keywords: ["9TSEVEN", "clothing", "community", "freedom", "happiness"],
  copyright: "© 2025 9TSEVEN. Alle rettigheder forbeholdes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <header>
          <HamburgerMenu />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
