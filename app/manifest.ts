import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mafia Minds",
    short_name: "Mafia Minds",
    description: "The classic game of deception, online.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo-mark.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-hero.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
