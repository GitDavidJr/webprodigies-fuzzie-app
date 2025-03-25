import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Definindo as rotas protegidas
const isProtectedRoute = createRouteMatcher([
  "/connections(.*)",
  "/dashboard(.*)",
  "/settings(.*)",
  "/workflows(.*)",
]);

export default clerkMiddleware(async (auth, req) => {

  // Verificando se a URL corresponde a uma rota protegida
  if (isProtectedRoute(req)) {
    // Protegendo as rotas definidas acima
    await auth.protect();
  } 
});

export const config = {
  matcher: [
    // Ignorar arquivos internos do Next.js e arquivos estáticos, a menos que encontrados em parâmetros de busca
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Sempre rodar para rotas de API
    "/(api|trpc)(.*)",
  ],
};
