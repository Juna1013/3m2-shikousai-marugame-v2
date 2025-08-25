import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import type { Metadata } from 'next';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "3M2 丸亀クレープ",
  description: "茨香祭 2024 出店サイト",
};

export default async function LocaleLayout({ 
  children, 
  params: { locale } 
}: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
