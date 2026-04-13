import Post from '@/components/Post';
import UpdateTagActionButton from '@/components/revalidate/UpdateTagActionButton';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Suspense fallback='Loading...'>
        <Post postId={51} fetchOptions={{ next: { tags: ['post-51'] } }} />
      </Suspense>
      <UpdateTagActionButton tag='post-51' />
    </>
  );
}
