"use client"

import { useActionState } from "react"
import handleForm from "./action"

const RegisterPage = () => {
    const [state, formAction] = useActionState(handleForm, { errors: {} })

    return (
        <div>
            <h2>Formulario de registro</h2>
            <form action={formAction}>
                <div>
                    Email:
                    <input type="text" name="email" />
                    {state.errors?.email && (
                        <p style={{ color: "red" }}>{state.errors.email[0]}</p>
                    )}
                </div>
                <div>
                    Password:
                    <input type="password" name="password" />
                    {state.errors?.password && (
                        <p style={{ color: "red" }}>{state.errors.password[0]}</p>
                    )}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RegisterPage