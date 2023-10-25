import { getSkillProjectCount } from '@/lib/skills';
import { NextResponse } from 'next/server';

/**
 * Retrieves skill project count and returns a JSON response.
 *
 * @param {object} request - The request object.
 * @returns {object} - The JSON response containing the skill project count.
 */
export function GET(request) {
  const skills = getSkillProjectCount();

  return NextResponse.json({ skills });
}
