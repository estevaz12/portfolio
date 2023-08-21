import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const page = params.page;
  const post = params.id;

  const gallery = getPostGallery(page, post);
  return NextResponse.json({ gallery });
}

// TODO: if that doesn't work make an api route --> might be the best approach
// get posts gallery image names from page name and post id
function getPostGallery(page, id) {
  const dir = path.resolve('./', page, id, 'gallery');
  console.log(dir);
  let fileNames = [];

  try {
    fileNames = fs.readdirSync(dir);
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
  } catch (error) {
    // console.error(`Error reading files in gallery: `, error);
    // Handle the error or provide a fallback behavior
    // For example, you can return an empty array or a default value
    return [];
  }
}
