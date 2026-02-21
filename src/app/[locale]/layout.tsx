import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Noto_Sans_KR, Noto_Sans_Sinhala } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sans-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Chueok Korea | 추억 코리아 | Unforgettable Korean Journeys",
  description:
    "Curated group tours to Korea for Sri Lankan families & friends. From ancient palaces to volcanic islands — experience the full wonder of Korea together.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${notoSansKR.variable} ${notoSansSinhala.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
