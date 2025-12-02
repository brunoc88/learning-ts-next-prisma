"use client"
import { useActionState } from "react"
import { handleNumer } from "./action"

const numberPage = () => {

    const [state, formAction] = useActionState(handleNumer, { errors: {} })
    return (
        <div>
            <h2>Validar numero</h2>
            <form action={formAction}>
                <input type="text" name="number" />
                {state.errors?.number && (
                    <p style={{ color: "red" }}>{state.errors.number[0]}</p>
                )}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default numberPage