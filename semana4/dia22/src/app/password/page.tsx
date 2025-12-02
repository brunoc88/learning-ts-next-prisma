"use client"

import { useActionState } from "react"
import handlePasswordForm from "./action"

const passwordFormPage = () => {
    const [state, formAction] = useActionState(handlePasswordForm, { errors: {} })

    return (
        <div>
            <form action={formAction}>
                <h2>Validacion refinada</h2>
                <div>
                    password:
                    <input type="password" name="password" />
                    {state.errors?.password && (
                        <p style={{ color: "red" }}>{state.errors.password[0]}</p>
                    )}
                </div>
                <div>
                    confirmar:
                    <input type="password" name="confirmPassword" />
                    {state.errors?.confirmPassword && (
                        <p style={{ color: "red" }}>{state.errors.confirmPassword[0]}</p>
                    )}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default passwordFormPage