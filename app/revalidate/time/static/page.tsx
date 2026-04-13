import Post from '@/components/Post';

export default function Page() {
  return <Post postId={20} fetchOptions={{ next: { revalidate: 1800 } }} />;
}
