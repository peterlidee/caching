'use client';

import { useState, useEffect } from 'react';

export default function ClientWithState() {
  const [count, setCount] = useState(100);
  useEffect(() => {
    document.title = 'Updated title';
  }, []);

  const handler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>Count is {count}</div>
      <button
        onClick={handler}
        className='bg-lime-500 rounded px-2 py-1 text-black'
      >
        add 1
      </button>
    </>
  );
}
