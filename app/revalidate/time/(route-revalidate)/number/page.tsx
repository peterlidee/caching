import Post from '@/components/Post';

export const revalidate = 100;

export default function Page() {
  return (
    <>
      <Post postId={21} fetchOptions={{}} />
      <Post postId={22} fetchOptions={{ cache: 'force-cache' }} />
      <Post postId={23} fetchOptions={{ next: { revalidate: 50 } }} />
    </>
  );
}
