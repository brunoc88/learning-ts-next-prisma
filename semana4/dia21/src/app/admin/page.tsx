import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"  // ajustá ruta según tu proyecto

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  // ❌ No hay sesión → fuera
  if (!session) {
    redirect("/login")
  }

  // ❌ No tiene rol admin → fuera
  if (session.user.rol !== "admin") {
    redirect("/")
  }

  // ✔️ Si pasa ambas validaciones → renderizar
  return (
    <div>
      <h1>Panel Administrador</h1>
      <p>Bienvenido {session.user.email}</p>
      <p>Tu rol: {session.user.rol}</p>
    </div>
  )
}
