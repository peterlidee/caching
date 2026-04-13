import { getPosts } from '../page';
import SinglePost from '@/components/blog/SinglePost';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export const dynamicParams = true; // true | false

export default async function Page({ params }: PageProps<'/blog/[id]'>) {
  const { id } = await params;
  return <SinglePost id={id} />;
}
