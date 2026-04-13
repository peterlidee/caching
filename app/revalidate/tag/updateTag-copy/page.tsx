import Post from '@/components/Post';

export default function Page() {
  return (
    <>
      <Post postId={47} fetchOptions={{}} />
      <Post
        postId={48}
        fetchOptions={{ next: { revalidate: 1800, tags: ['post-48'] } }}
      />
      <Post postId={49} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
