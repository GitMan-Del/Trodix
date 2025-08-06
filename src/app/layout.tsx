import type { Metadata } from "next";
import { Protest_Strike, Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
  metadataBase: new URL('https://example.com'),
  title: { default: 'My Site', template: '%s | My Site' },
  description: 'Welcome to My Site',
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'en-US': 'https://example.com/en-US',
    }
  },
  openGraph: {
    title: 'My Site',
    description: 'Welcome to My Site',
    url: 'https://example.com',
    siteName: 'My Site',
    images: [{ url: 'https://example.com/og.png' }]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${protestStrike.variable} ${poppins.variable} antialiased bg-background overflow-x-hidden`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
