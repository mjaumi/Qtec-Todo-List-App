import Header from '@/components/CommonComp/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// initializing the font family here
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// initializing the metadata here
export const metadata: Metadata = {
  title: 'Todo List',
  description:
    'Todo List application made with Next.js for Qtec Solutions Limited.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable}`}>
      <body className='font-poppins min-h-screen bg-primary'>
        <Header />
        {children}
      </body>
    </html>
  );
}
