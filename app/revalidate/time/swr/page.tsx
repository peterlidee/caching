import Post from '@/components/Post';

export default function page() {
  return (
    <>
      <Post postId={30} fetchOptions={{ next: { revalidate: 60 } }} />
      <Post postId={31} fetchOptions={{ next: { revalidate: 600 } }} />
      <Post postId={32} fetchOptions={{ cache: 'force-cache' }} />
    </>
  );
}
