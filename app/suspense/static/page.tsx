import Post from '@/components/Post';
import Footer from '@/components/static/Footer';
import Header from '@/components/static/Header';
import { Suspense } from 'react';

export default function page() {
  return (
    <>
      <Header />
      <Suspense fallback='...loading'>
        <Post postId={50} fetchOptions={{}} />
      </Suspense>
      <Footer />
    </>
  );
}
