'use server';

import { updateTag } from 'next/cache';

type RevalidateStateT = {
  revalidated: boolean;
  message?: string;
} | null;

export async function updateTagAction(
  _prevState: RevalidateStateT,
  tag: string,
) {
  if (tag) {
    updateTag(tag);
    return {
      revalidated: true,
    };
  }
  return {
    revalidated: false,
    message: 'Missing tag to revalidate',
  };
}
