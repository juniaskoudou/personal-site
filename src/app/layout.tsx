import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat } from "next/font/google";
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

const caveat = Caveat({
  variable: "--font-caveat",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} sm:max-w-[380px] w-full mx-auto px-6`}>
      <head>
        <script defer data-domain="iamjunias.com" src="https://plausible.io/js/script.js"></script>
      </head>
      
      <body
        className="antialiased bg-stone-100 min-h-screen flex flex-col pt-8"
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <main className="flex-grow">
              {children}
            </main>
            <footer className="py-2 flex justify-between items-center tracking-tight max-w-[380px] mx-auto">
              <span className="font-mono uppercase font-medium text-[10px] text-stone-500">&copy; Junias {new Date().getFullYear()} </span>
              <span className="font-mono uppercase font-medium text-[10px] text-stone-500 bg-stone-200/50 border border-stone-300/50 rounded-full px-2 py-[2px]">v0.3</span>
            </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
