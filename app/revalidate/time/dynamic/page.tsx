import Post from '@/components/Post';

export const dynamic = 'force-dynamic';

export default function page() {
  return <Post postId={20} fetchOptions={{ next: { revalidate: 1800 } }} />;
}
