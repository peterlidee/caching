'use server';

type RevalidateStateT = {
  revalidated: boolean;
  now: number;
  message?: string;
} | null;

import { revalidatePath } from 'next/cache';

export async function revalidatePathAction(
  _prevState: RevalidateStateT,
  path: string,
) {
  if (path) {
    revalidatePath(path);
    return {
      revalidated: true,
      now: Date.now(),
    };
  }
  return {
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  };
}
