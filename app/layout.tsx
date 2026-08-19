import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import AuthInitializer from '@/components/AuthInitializer';
import MainContent from '@/components/MainContent/MainContent';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'swagger-no-5',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <AuthInitializer>
              <MainContent>{children}</MainContent>
            </AuthInitializer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
