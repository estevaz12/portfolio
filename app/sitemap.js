import { getAllPostIds } from '@/lib/posts';

export default function sitemap() {
  const baseURL = 'https://estebanvc.vercel.app';
  let siteMap = [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: baseURL + '/projects',
      lastModified: new Date(),
    },
    {
      url: baseURL + '/skills',
      lastModified: new Date(),
    },
    {
      url: baseURL + '/about',
      lastModified: new Date(),
    },
    {
      url: baseURL + '/contact',
      lastModified: new Date(),
    },
  ];

  const projects = getAllPostIds('projects');
  const about = getAllPostIds('about');

  projects.forEach((post) => {
    siteMap.push({
      url: `${baseURL}/projects/${post}`,
      lastModified: new Date(),
    });
  });

  about.forEach((post) => {
    siteMap.push({
      url: `${baseURL}/about/${post}`,
      lastModified: new Date(),
    });
  });

  return siteMap;
}
