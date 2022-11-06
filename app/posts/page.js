import { use } from "react";

async function getPosts(limit = 3) {
  console.log(limit);
  let posts = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
  return posts.json();
}

export default function Page(ctx) {
  let { posts } = use(getPosts(ctx.searchParams.limit));
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
