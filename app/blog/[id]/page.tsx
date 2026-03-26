import Post from '@/components/blog/Post';
import { getPosts } from '../page';

export async function generateStaticParams2() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}
// TODO: put this back
export async function generateStaticParams() {
  return [];
}

export const dynamicParams = true; // true | false

export default async function page({ params }: PageProps<'/blog/[id]'>) {
  const { id } = await params;
  return <Post id={id} />;
}
