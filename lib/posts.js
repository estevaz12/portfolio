import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = 'posts';
const PUBLIC_DIR = path.resolve('./public');

/**
 * Retrieves and sorts the data of posts for a given page.
 *
 * @param {string} page - The page name.
 * @returns {Array} - The sorted posts data.
 */
export function getSortedPostsData(page) {
  const dir = path.join(process.cwd(), postsDir, page);
  // Get file names under /posts/{page}
  const fileNames = fs.readdirSync(dir);
  // Map file names to post data objects
  const allPostsData = fileNames.map((fileName) => {
    // Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Get bg image path from public folder with id
    const bgAvailable = getPreviewBg(page);

    // Get preview img path from public folder with id
    const previewImg = getPreviewImg(page, id);

    // Get text content from md file
    const text = getTextContent(dir, fileName);

    // Combine the data with the id
    return {
      id,
      bgAvailable,
      previewImg,
      ...text.data,
    };
  });

  // Sort posts by date if the page is 'projects', otherwise sort by title
  const sortedPostsData =
    page === 'projects'
      ? allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
      : allPostsData.sort((a, b) => (a.title < b.title ? -1 : 1));

  return sortedPostsData;
}

/**
 * Check if the preview background image exists for a given page
 * @param {string} page - The name of the page
 * @returns {boolean} - True if the background image exists, false otherwise
 */
function getPreviewBg(page) {
  const bgPath = path.join(process.cwd(), 'public', page, 'preview-bg.png');

  // Check if the background image file exists
  return fs.existsSync(bgPath);
}

/**
 * Get the path of the preview image for a specific page and ID.
 *
 * @param {string} page - The page name.
 * @param {string} id - The ID of the image.
 * @returns {string|null} - The path of the preview image, or null if it doesn't exist.
 */
function getPreviewImg(page, id) {
  const imgDir = path.resolve(PUBLIC_DIR, page, id);

  try {
    // Get the list of files in the image directory
    const files = fs.readdirSync(imgDir);

    // Find the preview file in the list of files
    const previewFile = files.find((file) => file.startsWith('preview'));

    const publicDir = path.join('/', page, id);
    return path.join(publicDir, previewFile);
  } catch (e) {
    // Return null if an error occurs
    return null;
  }
}

/**
 * Reads the content of a markdown file and returns the parsed metadata.
 *
 * @param {string} dir - The directory where the file is located.
 * @param {string} fileName - The name of the markdown file.
 * @return {object} - The parsed metadata object.
 */
function getTextContent(dir, fileName) {
  // Read md file as string
  const fullPath = path.join(dir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterObj = matter(fileContents);
  return matterObj;
}

/**
 * Retrieves all post IDs from the specified page.
 *
 * @param {string} page - The page to retrieve post IDs from.
 * @return {Array<string>} An array of post IDs.
 */
export function getAllPostIds(page) {
  const dir = path.join(process.cwd(), postsDir, page);
  const fileNames = fs.readdirSync(dir);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Retrieves the data for a specific post.
 *
 * @param {string} page - The page name where the post is located.
 * @param {string} id - The ID of the post.
 * @return {Object} - An object containing the post data including ID, bg
 *                    availability, preview image, and content HTML.
 */
export async function getPostData(page, id) {
  const bgAvailable = getPreviewBg(page, id);
  const previewImg = getPreviewImg(page, id);

  const fullPath = path.join(process.cwd(), postsDir, page, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const matterObj = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterObj.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    bgAvailable,
    previewImg,
    ...matterObj.data,
    contentHtml,
  };
}

/**
 * Retrieves a list of imgs and alt text for a given page and post ID.
 *
 * @param {string} page - The page name.
 * @param {string} id - The ID of the post.
 * @return {Array<Object>} - An array of objects containing the path and alt
 *                          text for each image in the gallery.
 */
export function getPostGallery(page, id) {
  const dir = path.resolve(PUBLIC_DIR, page, id, 'gallery');
  let fileNames = [];

  try {
    fileNames = fs.readdirSync(dir);
    const publicDir = path.join('/', page, id, 'gallery');
    // url encode filename
    const filePaths = fileNames.map((fileName) =>
      path.join(publicDir, encodeURIComponent(fileName))
    );

    // map through filePaths to create an array of objects containing the path
    // and alt text
    return filePaths.map((filePath, i) => ({
      id: i,
      src: filePath,
      alt: `${id} gallery image ${i}`,
    }));
  } catch (error) {
    return [];
  }
}
