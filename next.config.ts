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
  // Cache headers
  headers: async () => [
    {
      // Font, immagini e asset statici: cache lunga (1 anno)
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // File statici Next.js (_next/static): già gestiti da Next.js con hash, cache lunga
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Pagine HTML: cache breve con revalidazione
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
        },
      ],
    },
  ],
};

export default nextConfig;
