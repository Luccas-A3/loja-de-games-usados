import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantém a configuração necessária para o Prisma funcionar corretamente
  serverExternalPackages: ["@prisma/client"],

  // Adiciona a permissão para carregar imagens hospedadas no Vercel Blob
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;