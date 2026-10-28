import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verificamos se o usuário está a tentar aceder a uma rota administrativa (ex: /admin)
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Aqui faremos a verificação da sessão/token do Better Auth ou do cookie de autenticação
    // Por enquanto, vamos deixar a estrutura pronta para receber a validação do cargo do usuário
    
    // Exemplo de redirecionamento caso não autorizado:
    // return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configura quais rotas o middleware deve observar
export const config = {
  matcher: ["/admin/:path*"],
};