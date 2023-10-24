import { getSkillProjectCount } from '@/lib/skills';
import { NextResponse } from 'next/server';

export function GET(request) {
  const skills = getSkillProjectCount();

  return NextResponse.json({ skills });
}
