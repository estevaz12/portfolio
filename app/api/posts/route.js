import { getSortedPostsData } from '@/lib/posts';
import { NextResponse } from 'next/server';

/**
 * getSortedPostsData - Retrieves sorted posts based on the page parameter.
 *
 * @param {string} page - The page parameter to filter the posts.
 * @returns {Array} - Array of sorted posts data.
 */

/**
 * Handles the GET request and returns the sorted projects data.
 *
 * @param {Request} request - The GET request object.
 * @returns {Response} - The response object with the sorted projects data.
 */
export function GET(request) {
  const params = request.nextUrl.searchParams;
  const projects = getSortedPostsData(params.get('page'));

  return NextResponse.json({ projects });
}
