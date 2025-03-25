import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ucarecdn.com'], // Adiciona o domínio externo aqui
  },
  serverRuntimeConfig: {
    host: '0.0.0.0',
  },
};

export default nextConfig;
