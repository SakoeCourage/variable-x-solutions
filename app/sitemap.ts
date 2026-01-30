import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.variablexsolutions.com",
      lastModified: new Date(),
    },
    {
        url: "https://www.variablexsolutions.com/software-architecture",
        lastModified: new Date(),
      },
  ];
}
