"use server";
import { prisma } from "@/lib/prisma";

export async function createPost(data: FormData) {
  const title = data.get("title");
  return prisma.post.create({
    data: { title: title as string },
  });
}