import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable service worker in development so cached SW doesn't hide changes
  disable: process.env.NODE_ENV === "development",
  // runtime caching rules to improve mobile offline/poor-network experience
  additionalManifestEntries: [
    { url: "/", revision: "1" },
    { url: "/about-us", revision: "1" },
    { url: "/contact-us", revision: "1" },
    { url: "/beauty-services", revision: "1" },
    { url: "/doctors", revision: "1" },
    { url: "/medical-services-at-home", revision: "1" },
    { url: "/turn-rating", revision: "1" },
    { url: "/shop", revision: "1" },
    { url: "/weblog", revision: "1" },
    { url: "/online-appointments", revision: "1" },
  ],
  runtimeCaching: [
    {
      // images: use cache first
      urlPattern: /^https?:.*\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }, // 30 days
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    {
      // static resources: css/js - stale while revalidate
      urlPattern: /^https?:.*\.(?:css|js)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
      },
    },
    {
      // Next.js API routes /api/** - network first with short timeout
      urlPattern: /^https?:.*\/api\/.*$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "next-api",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 },
      },
    },
    {
      // generic http requests - network first
      urlPattern: /^https?:.*$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "http-cache",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 200 },
      },
    },
  ],
  // eslint-disable-next-line
} as any);

export default withPWA({
  // Your Next.js config
  reactStrictMode: true,
});
