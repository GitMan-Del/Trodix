import type { Metadata } from "next";
import { Protest_Strike, Poppins } from "next/font/google";
import "./globals.css";

const protestStrike = Protest_Strike({
  variable: "--font-protest-strike",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Trodix - Trading Journal Platform",
  description: "A place to track, grow, and trade without the noise. Built by traders, for traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${protestStrike.variable} ${poppins.variable} antialiased bg-background overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
