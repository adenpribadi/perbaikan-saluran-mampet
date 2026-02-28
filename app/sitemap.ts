import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const baseUrl = "https://perbaikansaluranmampet.com";

const areas = [
  "bandung",
  "sukajadi",
  "cicendo",
  "buah-batu",
  "antapani",
  "arcamanik",
];

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages = [
    "",
    "/layanan",
    "/blog",
  ];

  const areaPages = areas.map((area) => `/kota/${area}`);

  const blogPages = blogPosts.map(
    (post) => `/blog/${post.slug}`
  );

  const allPages = [
    ...staticPages,
    ...areaPages,
    ...blogPages,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}