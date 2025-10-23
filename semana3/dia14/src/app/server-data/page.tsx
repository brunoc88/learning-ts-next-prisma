// app/server-data/page.tsx
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function ServerData() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Posts desde Server Component</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}