import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://perbaikansaluranmampet.com',
      lastModified: new Date(),
    },
    {
      url: "https://perbaikansaluranmampet.com/kota/bandung",
      lastModified: new Date(),
    },
  ]
}