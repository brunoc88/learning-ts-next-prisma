import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session) return new Response("Unauthorized", { status: 401 });
  if (session.user.rol !== "admin") return new Response("Unauthorized", { status: 403 });

  return new Response("OK",{
    status: 200
  })
}
