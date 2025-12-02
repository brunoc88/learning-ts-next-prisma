"use client"

import { useActionState } from "react";
import { handleForm } from "./action";

const ProfileFormPage = () => {

    const [state, formAction] = useActionState(handleForm, { errors: {} });

    return (
        <div>
            <h2>Profile Form</h2>
            <form action={formAction} >
                <div>
                    Name:
                    <input type="text" name="name" />
                    {state.errors?.name && (
                        <p style={{ color: "red" }}>{state.errors.name[0]}</p>
                    )}
                </div>
                <div>
                    Age:
                    <input type="number" name="age" />
                    {state.errors?.age && (
                        <p style={{ color: "red" }}>{state.errors.age[0]}</p>
                    )}
                </div>
                <div>
                    Adress:
                    <div>
                        City:
                        <input type="text" name="city" />
                        {state.errors?.address?.city && (
                            <p style={{ color: "red" }}>{state.errors.address.city[0]}</p>
                        )}
                    </div>
                    <div>
                        Zip:
                        <input type="text" name="zip" />
                        {state.errors?.address?.zip && (
                            <p style={{ color: "red" }}>{state.errors.address.zip[0]}</p>
                        )}
                    </div>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ProfileFormPage