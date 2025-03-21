import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Junias K. | Product Designer & Photographer",
    template: "%s | Junias K."
  },
  description: "Welcome to my digital space. Here you&apos;ll find my design project, photos and thoughts on various topics.",
  
  metadataBase: new URL('https://iamjunias.com'),
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iamjunias.com',
    siteName: 'Junias K.',
    title: "Junias K. | Product Designer & Photographer",
    description: "Welcome to my digital space. Here you&apos;ll find my design project, photos and thoughts on various topics.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Junias K. - Product Designer & Photographer',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Junias K. | Product Designer & Photographer",
    description: "Welcome to my digital space. Here you&apos;ll find my design project, photos and thoughts on various topics.",
    images: ['/og-image.jpg'],
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Keywords
  keywords: ['product design', 'UI/UX', 'photography', 'Fujifilm', 'web development', 'Paris designer'],
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="iamjunias.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
