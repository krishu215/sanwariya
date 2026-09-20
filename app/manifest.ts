import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shree Sanwariya Marketing", short_name: "SSM", description: "Digital & offline marketing. Rooted in Indore.",
    start_url: "/", display: "standalone", background_color: "#f6f4ee", theme_color: "#f6f4ee", lang: "en-IN",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/brand-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
