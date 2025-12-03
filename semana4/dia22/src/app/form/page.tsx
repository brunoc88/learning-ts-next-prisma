"use client";

import { useActionState } from "react";
import { handleForm } from "./action";


const FormPage = () => {
  const [state, formAction] = useActionState(handleForm, { errors: {} });

  return (
    <div>
      <h2>Formulario</h2>
      <form action={formAction}>
        <div>
          Email:
          <input type="text" name="email" />
          {state.errors?.email && <p style={{ color: "red" }}>{state.errors.email[0]}</p>}
        </div>

        <div>
          Age:
          <input type="text" name="age" />
          {state.errors?.age && <p style={{ color: "red" }}>{state.errors.age[0]}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormPage;
