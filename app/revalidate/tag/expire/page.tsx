import Post from '@/components/Post';

export default function page() {
  return (
    <>
      <Post postId={44} fetchOptions={{}} />
      <Post
        postId={45}
        fetchOptions={{ next: { revalidate: 1800, tags: ['post-45'] } }}
      />
      <Post postId={46} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
