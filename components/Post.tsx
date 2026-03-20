type Props = {
  postId: number;
  fetchOptions: RequestInit;
};

export type PostT = {
  id: number;
  title: string;
};

export default async function Post({ postId, fetchOptions }: Props) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    fetchOptions,
  );
  const post: PostT = await data.json();
  // get date from headers
  const fetchDate = data.headers.get('date');
  const time = fetchDate ? new Date(fetchDate).toLocaleTimeString() : null;
  return (
    <div className='flex gap-2'>
      <div className='text-orange-400 mr-2'>{time}</div>
      <div className='font-bold'>{post.id}.</div>
      <div className='italic'>{post.title}</div>
    </div>
  );
}
