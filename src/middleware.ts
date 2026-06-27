import { defineMiddleware } from 'astro:middleware';

const EN_CONSTRUCCION = true; // cambiar a false para reabrir el sitio

export const onRequest = defineMiddleware(({ url }, next) => {
  const esLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  if (!EN_CONSTRUCCION || esLocal) return next();
  if (url.pathname === '/construccion') return next();
  return Response.redirect(new URL('/construccion', url.origin), 302);
});
