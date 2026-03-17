import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Formati moderni per performance migliori
    formats: ["image/avif", "image/webp"],
    // Dimensioni ottimizzate per responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ottimizzazioni per la produzione
  poweredByHeader: false,
  compress: true,
  // Ottimizzazione dei bundle
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
