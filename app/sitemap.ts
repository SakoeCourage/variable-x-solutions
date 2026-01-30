import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://variablexsolutions.com",
      lastModified: new Date(),
    },
    {
        url: "https://variablexsolutions.com/software-architecture",
        lastModified: new Date(),
      },
  ];
}
