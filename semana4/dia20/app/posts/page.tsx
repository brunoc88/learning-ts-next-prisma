import { prisma } from "@/lib/prisma";

export default async function Page() {
    const posts = await prisma.post.findMany()

    return (
        <div>
            <h2>Lista de posts:</h2>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>
                        id: {p.id},
                        titulo: {p.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}