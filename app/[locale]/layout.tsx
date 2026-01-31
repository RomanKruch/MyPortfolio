import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Locale } from '../../messages/config';
import './globals.css';
import Home from './page';

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

interface IProps {
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({ params }: IProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${MontserratSans.variable} ${RobotoSans.variable}`}>
        <Home params={params} />
      </body>
    </html>
  );
}
