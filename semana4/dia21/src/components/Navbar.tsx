"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav>
            {session?.user ? (
                <div>
                    <p>{session?.user?.email}</p>
                    <button onClick={() => signOut()}>LogOut</button>
                </div>
                
            ) : (
                <>  
                    <button onClick={() => signIn()}>SingIn</button>
                </>

            )}
        </nav>
    )
}

export default Navbar