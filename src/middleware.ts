import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ url }, next) => {
  if (url.pathname === '/construccion') return next();
  return Response.redirect(new URL('/construccion', url.origin), 302);
});
