import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janitha Gamage | Emerging Developer & Product Strategist",
  description:
    "Portfolio of Janitha Gamage, Software Engineering Undergraduate & emerging Developer & Product Strategist based in Colombo, Sri Lanka. Specializing in AI-driven development, React, TypeScript, and cloud technologies.",
  metadataBase: new URL("https://janithagamage.furo.lk"),
  openGraph: {
    title: "Janitha Gamage | Emerging Developer & Product Strategist",
    description:
      "Software Engineering Undergraduate at SLIIT. Specializing in AI-driven development, TypeScript, React, and cloud architectures.",
    url: "https://janithagamage.furo.lk",
    siteName: "Janitha Gamage Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janitha Gamage | Emerging Developer & Product Strategist",
    description:
      "Software Engineering Undergraduate at SLIIT. Specializing in AI-driven development, TypeScript, React, and cloud architectures.",
    creator: "@JanithaGamage01",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans antialiased selection:bg-red-500/10 selection:text-red-900 dark:selection:bg-red-500/20 dark:selection:text-red-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
        {/* Person Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Janitha Gamage",
              "jobTitle": "Emerging Developer & Product Strategist",
              "url": "https://janithagamage.furo.lk",
              "sameAs": [
                "https://github.com/JordanCJ7",
                "https://www.linkedin.com/in/janithagamage/",
                "https://x.com/JanithaGamage01",
                "https://www.instagram.com/janitha.gamage.01/",
                "https://www.facebook.com/janitha.gamage.01/"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Sri Lanka Institute of Information Technology"
              },
              "knowsAbout": [
                "Software Engineering",
                "Product Strategy",
                "AI-Driven Development",
                "React",
                "TypeScript",
                "Cloud Computing"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Colombo",
                "addressCountry": "Sri Lanka"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
