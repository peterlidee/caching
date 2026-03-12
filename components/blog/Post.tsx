import { PostT } from '@/app/blog/page';
import Link from 'next/link';

type Props = {
  id: string;
};

export async function getPost(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: PostT = await data.json();
  return post;
}

export default async function Post({ id }: Props) {
  const post = await getPost(id);
  return (
    <div>
      <h1 className='text-xl font-bold mb-2'>{post.title}</h1>
      <p>{post.body}</p>
      <Link href='/blog' className='text-blue-400 underline block mt-4'>
        back
      </Link>
    </div>
  );
}
