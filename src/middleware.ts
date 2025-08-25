import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ja'],
  defaultLocale: 'ja'
  // localePrefix: 'always' を一時的に削除
});

export const config = {
  matcher: ['/((?!_next).*)']
};
