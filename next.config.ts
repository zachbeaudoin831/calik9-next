import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "images.leadconnectorhq.com" },
      { protocol: "https", hostname: "assets.cdn.filesafe.space" },
      { protocol: "https", hostname: "calik9.com" },
    ],
  },
  async redirects() {
    return [
      // Pre-migration slugs → calik9.com canonical slugs
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/evaluation", destination: "/evaluation-with-behavior-specialist", permanent: true },
      { source: "/evaluation-with-jas", destination: "/evaluation-with-behavior-specialist", permanent: true },
      { source: "/coaching", destination: "/business-coaching", permanent: true },
      { source: "/online-training", destination: "/online-training-program2", permanent: true },
      { source: "/zoom-group", destination: "/zoom-group-class", permanent: true },
      // Mini Courses / Starter Course intentionally disabled; redirect both
      // legacy slugs to the services hub so old URLs still land somewhere.
      { source: "/starter-course", destination: "/newclientservices", permanent: true },
      { source: "/mini-courses", destination: "/newclientservices", permanent: true },
      { source: "/services", destination: "/newclientservices", permanent: true },
      // Legacy 1-week board & train (deleted earlier) → main Board & Train page
      { source: "/board-train-1week", destination: "/board-and-train", permanent: true },
      { source: "/checkout-1week-board-training", destination: "/board-and-train", permanent: true },
      // Calik9.com had /home as an alias for /
      { source: "/home", destination: "/", permanent: true },
      // Team page hidden for now — keep the route file but redirect visits.
      { source: "/team", destination: "/about-us", permanent: false },
    ];
  },
};

export default nextConfig;
