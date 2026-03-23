'use client';

import { useState } from 'react';

interface RevalidateResponse {
  revalidated: boolean;
  now: number;
  message?: string;
}

export default function RevalidateTagRouterButton({
  apiEndpoint,
  tag,
  profile,
}: {
  apiEndpoint: string;
  tag: string;
  profile: 'max' | 'expires';
}) {
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [result, setResult] = useState<RevalidateResponse | null>(null);

  const handleRevalidate = async () => {
    setResult(null);

    console.log(
      'calling api endpoint: ',
      `${apiEndpoint}?tag=${encodeURIComponent(tag)}&profile=${encodeURIComponent(profile)}`,
    );

    try {
      // Calling your route.ts with the path parameter
      const res = await fetch(
        `${apiEndpoint}?tag=${encodeURIComponent(tag)}&profile=${encodeURIComponent(profile)}`,
      );

      if (!res.ok) throw new Error('Failed to fetch');

      const data: RevalidateResponse = await res.json();
      setResult(data);
      setStatus(data.revalidated ? 'success' : 'error');
    } catch (err) {
      console.error(err);
      setStatus('error');
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

      {status === 'success' && result && (
        <p className='text-green-600 text-sm'>
          Revalidated at {new Date(result.now).toLocaleTimeString()}
        </p>
      )}

      {status === 'error' && (
        <p className='text-red-600 text-sm'>
          {result?.message || 'An error occurred while revalidating.'}
        </p>
      )}
    </div>
  );
}
