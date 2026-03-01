'use client';

import { useState, useEffect } from 'react';

/*
// ❌ don't do this
export default function ClientWithBrowserAPI() {
  function initiateState() {
    const lscount = localStorage.get('lscount');
    return lscount ? Number(lscount) : 0;
  }
  const [count, setCount] = useState(initiateState);
  return <div>Count is {count}</div>;
}
*/

export default function ClientWithBrowserAPI() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const lsCount = localStorage.getItem('lsCount');
    if (lsCount !== null) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setCount(Number(lsCount));
    }
  }, []);
  return <div>Count is {count}</div>;
}
