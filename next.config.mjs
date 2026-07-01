const productionSiteUrl = "https://prnstaffersal.com";
const productionRedirects = [
  {
    source: "/:path*",
    has: [
      {
        type: "host",
        value: "www.prnstaffersal.com"
      }
    ],
    destination: `${productionSiteUrl}/:path*`,
    permanent: true
  }
];

if (process.env.NODE_ENV === "production") {
  productionRedirects.push(
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "localhost:3000"
        }
      ],
      destination: `${productionSiteUrl}/:path*`,
      permanent: true
    },
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "127.0.0.1:3000"
        }
      ],
      destination: `${productionSiteUrl}/:path*`,
      permanent: true
    }
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return productionRedirects;
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
