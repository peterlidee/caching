'use client';

import { updateTagAction } from '@/app/revalidate/_actions/updateTagAction';
import { useActionState, useTransition } from 'react';

export default function UpdateTagActionButton({ tag }: { tag: string }) {
  const [state, dispatch] = useActionState(updateTagAction, null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className='my-5 flex gap-4 items-center'>
      <button
        onClick={() => {
          startTransition(() => dispatch(tag));
        }}
        className='px-4 py-2 bg-blue-600 text-white rounded'
        disabled={isPending}
      >
        Updat{isPending ? 'ing' : 'e'} tag {tag}
      </button>

      {state && state.revalidated && (
        <p className='text-green-600 text-sm'>Updated</p>
      )}

      {state && !state.revalidated && (
        <p className='text-red-600 text-sm'>
          {state?.message || 'An error occurred while updating.'}
        </p>
      )}
    </div>
  );
}
