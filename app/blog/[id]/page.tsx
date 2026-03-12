import Post from '@/components/blog/Post';
import { getPosts } from '../page';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export const dynamicParams = true; // true | false

export default async function page({ params }: PageProps<'/blog/[id]'>) {
  const { id } = await params;
  return <Post id={id} />;
}
