"use client";

import { useActionState } from "react";
import { handleLogin } from "./actions";

export default function LoginPage() {
  const [state, formAction] = useActionState(handleLogin, { errors: {} });

  return (
    <div>
      <h2>Login con Zod</h2>

      <form action={formAction}>
        <div>
          Email:
          <input name="email" type="text" />
          {state.errors?.email && (
            <p style={{ color: "red" }}>{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          Password:
          <input name="password" type="password" />
          {state.errors?.password && (
            <p style={{ color: "red" }}>{state.errors.password[0]}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
