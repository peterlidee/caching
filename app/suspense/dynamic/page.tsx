import Post from '@/components/Post';
import Footer from '@/components/static/Footer';
import Header from '@/components/static/Header';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function page() {
  return (
    <>
      <Header />
      <Suspense fallback='Loading...'>
        <Post postId={52} fetchOptions={{}} />
      </Suspense>
      <Footer />
    </>
  );
}
