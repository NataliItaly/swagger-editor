import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'swagger-no-5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="py-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
