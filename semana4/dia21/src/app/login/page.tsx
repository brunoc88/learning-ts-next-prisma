"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { data: session } = useSession()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/"
        })
    }

    return (
        <div>
            {session ? (
                <div>
                    <p>Bienvenido {session.user?.email}</p>
                </div>
            )
                : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            Email:
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">LogIn</button>
                    </form>)
            }
        </div>
    )
}

export default LoginPage