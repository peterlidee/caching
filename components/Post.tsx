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
  return (
    <div>
      {post.id}. {post.title}
    </div>
  );
}
