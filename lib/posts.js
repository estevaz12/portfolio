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

    // Get bg image path from public folder with id
    const bgAvailable = getPreviewBg(page);

    // Get preview img path from public folder with id
    const previewAvailable = getPreviewImg(page, id);

    // Get text content from md file
    const text = getTextContent(dir, fileName);

    // Combine the data with the id
    return {
      id,
      bgAvailable,
      previewAvailable,
      ...text.data,
    };
  });

  // Sort posts by date if the page is 'projects' and if the page is 'about' sort by title
  return allPostsData.sort((a, b) => {
    if (page === 'projects') {
      return a.date > b.date ? -1 : 1;
    }
    return a.title < b.title ? -1 : 1;
  });
}

function getPreviewBg(page) {
  const bgPath = path.join(process.env.ENV_PATH, page, 'preview-bg.png');
  return fs.existsSync(bgPath);
}

function getPreviewImg(page, id) {
  const imgPath = path.join(process.env.ENV_PATH, page, id, 'preview.png');
  return fs.existsSync(imgPath);
}

function getTextContent(dir, fileName) {
  // Read md file as string
  const fullPath = path.join(dir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterObj = matter(fileContents);
  return matterObj;
}

export function getAllPostIds(page) {
  const dir = path.join(process.cwd(), postsDir, page);
  const fileNames = fs.readdirSync(dir);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getPostData(page, id) {
  const bgAvailable = getPreviewBg(page, id);
  const previewAvailable = getPreviewImg(page, id);

  const fullPath = path.join(process.cwd(), postsDir, page, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const matterObj = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterObj.content);
  const contentHtml = processedContent.toString();

  // Get gallery images
  const gallery = getPostGallery(page, id);

  // Combine the data with the id
  return {
    id,
    bgAvailable,
    previewAvailable,
    ...matterObj.data,
    contentHtml,
    gallery,
  };
}

// get posts gallery image names from page name and post id
export function getPostGallery(page, id) {
  const dir = path.join(process.env.ENV_PATH, page, id, 'gallery');
  console.log(dir);
  let fileNames = [];

  try {
    fileNames = fs.readdirSync(dir);
  } catch (error) {
    // console.error(`Error reading files in gallery: `, error);
    // Handle the error or provide a fallback behavior
    // For example, you can return an empty array or a default value
    return [];
  }

  const publicDir = path.join('/', page, id, 'gallery');
  // url encode filename
  const filePaths = fileNames.map((fileName) =>
    path.join(publicDir, encodeURIComponent(fileName))
  );

  // map through filePaths to create an array of objects containing the path and alt text
  return filePaths.map((filePath, i) => ({
    id: i,
    src: filePath,
    alt: `${id} gallery image ${i}`,
  }));
}
