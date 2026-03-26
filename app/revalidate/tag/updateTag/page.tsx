import Post from '@/components/Post';
import UpdateTagActionButton from '@/components/revalidate/UpdateTagActionButton';

export default function page() {
  return (
    <>
      <div className='mb-8'>
        <Post postId={47} fetchOptions={{}} />
        <Post
          postId={48}
          fetchOptions={{ next: { revalidate: 1800, tags: ['post-48'] } }}
        />
        <Post postId={49} fetchOptions={{ cache: 'force-cache' }} />
      </div>
      <UpdateTagActionButton tag='post-48' />
    </>
  );
}
