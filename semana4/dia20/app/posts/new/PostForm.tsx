"use client";

import { useState } from "react";
import { createPost } from "./page";

export default function PostForm() {
  const [title, setTitle] = useState("");

  return (
    <form action={createPost}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Crear</button>
    </form>
  );
}
