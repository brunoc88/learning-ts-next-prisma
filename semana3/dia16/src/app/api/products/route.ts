export async function GET() {
  const products = [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
  ]
  return Response.json(products)
}

export async function POST(req: Request) {
  const body = await req.json()
  return Response.json({ message: 'Producto agregado', data: body })
}