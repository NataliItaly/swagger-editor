import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import AuthInitializer from '@/components/AuthInitializer';
import MainContent from '@/components/MainContent/MainContent';

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
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthInitializer>
            <MainContent>{children}</MainContent>
          </AuthInitializer>
        </ThemeProvider>
      </body>
    </html>
  );
}
