import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat, Roboto } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { locales } from '../../i18n/config';
import '../globals.css';
import { notFound } from 'next/navigation';
import Home from './page';
import { Messages } from '../../messages/types';

const MontserratSans = Montserrat({
  variable: '--font-mons',
  subsets: ['latin'],
});

const RobotoSans = Roboto({
  variable: '--font-rob',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();
  const messages: Messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${MontserratSans.variable} ${RobotoSans.variable}`}>
        {/* <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider> */}
        <Home messages={messages} />
      </body>
    </html>
  );
}
