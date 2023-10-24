import { getSortedPostsData } from '@/lib/posts';
import { NextResponse } from 'next/server';

export function GET(request) {
  const params = request.nextUrl.searchParams;
  const projects = getSortedPostsData(params.get('page'));

  return NextResponse.json({ projects });
}
