// src/app/blog/[id]/page.tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h2>Mostrando post {params.id}</h2>;
}