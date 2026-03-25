import type { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  const profileParam = request.nextUrl.searchParams.get('profile');
  const profile: 'max' | { expire: 0 } = profileParam
    ? profileParam === 'expire'
      ? { expire: 0 }
      : 'max'
    : 'max';

  if (tag) {
    revalidateTag(tag, profile);
    return Response.json({ revalidated: true });
  }

  return Response.json({
    revalidated: false,
    message: 'Missing tag to revalidate',
  });
}
