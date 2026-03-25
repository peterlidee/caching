'use client';

import { useState } from 'react';

interface RevalidateResponse {
  revalidated: boolean;
  message?: string;
}

export default function RevalidateTagRouterButton({
  apiEndpoint,
  tag,
  profile,
}: {
  apiEndpoint: string;
  tag: string;
  profile: 'max' | 'expire';
}) {
  const [result, setResult] = useState<RevalidateResponse | null>(null);

  const handleRevalidate = async () => {
    setResult(null);

    try {
      // Calling the route.ts with the tag and profile parameters
      const res = await fetch(
        `${apiEndpoint}?tag=${encodeURIComponent(tag)}&profile=${encodeURIComponent(profile)}`,
      );

      if (!res.ok) throw new Error('Failed to fetch');

      const data: RevalidateResponse = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({
        revalidated: false,
      });
    }
  };

  return (
    <div className='my-5 flex gap-4 items-center'>
      <button
        onClick={handleRevalidate}
        className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Revalidate tag {tag}
      </button>

      {result && result.revalidated && (
        <p className='text-green-600 text-sm'>Revalidated</p>
      )}

      {result && !result.revalidated && (
        <p className='text-red-600 text-sm'>
          {result?.message || 'An error occurred while revalidating.'}
        </p>
      )}
    </div>
  );
}
