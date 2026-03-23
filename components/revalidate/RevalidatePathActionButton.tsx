'use client';

import { revalidatePathAction } from '@/app/revalidate/_actions/revalidatePathAction';
import { useActionState, useTransition } from 'react';

export default function RevalidatePathActionButton({
  routeToRevalidate,
}: {
  routeToRevalidate: string;
}) {
  const [state, dispatch] = useActionState(revalidatePathAction, null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className='my-5 flex gap-4 items-center'>
      <button
        onClick={() => {
          startTransition(() => dispatch(routeToRevalidate));
        }}
        className='px-4 py-2 bg-blue-600 text-white rounded'
        disabled={isPending}
      >
        Revalidat{isPending ? 'ing' : 'e'}
      </button>

      {state && state.revalidated && (
        <p className='text-green-600 text-sm'>
          Revalidated at {new Date(state.now).toLocaleTimeString()}
        </p>
      )}

      {state && !state.revalidated && (
        <p className='text-red-600 text-sm'>
          {state?.message || 'An error occurred while revalidating.'}
        </p>
      )}
    </div>
  );
}
