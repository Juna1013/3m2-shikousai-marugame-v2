import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ja'] as const;
export const defaultLocale = 'ja' as const;

export default getRequestConfig(async ({ locale }) => {
  // ロケールの検証
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./src/messages/${locale}.json`)).default
  };
});
