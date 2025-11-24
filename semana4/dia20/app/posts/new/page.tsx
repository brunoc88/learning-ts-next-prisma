"use server";
import { prisma } from "@/lib/prisma";
import PostForm from "./PostForm";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;

  await prisma.post.create({
    data: { title },
  });
}

export default async function NewPostPage() {
  return (
    <div>
      <h1>Nuevo Post</h1>
      {/* Aquí renderizás el form cliente */}
      <PostForm />
    </div>
  );
}
