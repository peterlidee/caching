import Post from '@/components/Post';

export default function page() {
  return (
    <>
      <Post postId={41} fetchOptions={{}} />
      <Post
        postId={42}
        fetchOptions={{ next: { revalidate: 1800, tags: ['post-42'] } }}
      />
      <Post postId={43} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
