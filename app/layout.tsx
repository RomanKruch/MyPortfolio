import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratSans.variable} ${RobotoSans.variable}`}>{children}</body>
    </html>
  );
}
