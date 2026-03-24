'use server';

type RevalidateStateT = {
  revalidated: boolean;
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
    };
  }
  return {
    revalidated: false,
    message: 'Missing path to revalidate',
  };
}
