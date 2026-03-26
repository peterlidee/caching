import Link from 'next/link';

export type SinglePostT = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: SinglePostT[] = await data.json(); // 100 posts
  return posts.slice(0, 5); // return 5 posts
}

export default async function BlogHome() {
  const posts = await getPosts(); // 5 posts
  return (
    <div>
      <h1 className='text-xl font-bold mb-2'>Blog</h1>
      <ol className='list-inside list-decimal'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className='underline text-blue-500'>
              {post.title}
            </Link>
          </li>
        ))}
        <li>
          <Link href={`/blog/6`} className='underline text-blue-500'>
            post 6
          </Link>
        </li>
      </ol>
    </div>
  );
}
