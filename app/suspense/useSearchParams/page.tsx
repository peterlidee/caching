import Hello from '@/components/client/Hello';
import Footer from '@/components/static/Footer';
import Header from '@/components/static/Header';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback='Loading...'>
        <Hello />
      </Suspense>
      <Footer />
    </>
  );
}
