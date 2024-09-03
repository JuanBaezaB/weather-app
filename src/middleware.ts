import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  // const { request, redirect } = context;
  // const visitedCookie = 'visited=true';
  // const redirectPath = '/welcome';
  // const rootPath = '/';

  // const visited = request.headers.get('cookie')?.includes(visitedCookie);
  // const { pathname } = new URL(request.url);

  // if (!visited && pathname === rootPath) {
  //   return redirect(redirectPath, 302);
  // }

  return next();
});