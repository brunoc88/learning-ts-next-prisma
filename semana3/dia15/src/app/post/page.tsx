export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h1>Posts (SSG)</h1>
      <ul>
        {posts.slice(0, 10).map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}