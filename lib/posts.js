import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = 'posts';

export function getSortedPostsData(page) {
  const dir = path.join(process.cwd(), postsDir, page);
  // Get file names under /posts/{page}
  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames.map((fileName) => {
    // Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read md file as string
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterObj = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterObj.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(page) {
  const dir = path.join(postsDir, page);
  const fileNames = fs.readdirSync(dir);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getPostData(page, id) {
  const fullPath = path.join(postsDir, page, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const matterObj = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterObj.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    ...matterObj.data,
    contentHtml,
  };
}

// get posts gallery image names from page name and post id
export function getPostGallery(page, id) {
  const dir = path.join('public', page, id, 'gallery');
  const fileNames = fs.readdirSync(dir);
  const publicDir = path.join('/', page, id, 'gallery');
  const filePaths = fileNames.map((fileName) => path.join(publicDir, fileName));

  // map through filePaths to create an array of objects containing the path and alt text
  return filePaths.map((filePath, i) => ({
    id: i,
    src: filePath,
    alt: `${id} gallery image ${i}`,
  }));
}