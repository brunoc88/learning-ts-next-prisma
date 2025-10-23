import ProductList from "./ProductList"

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  })
  const products = await res.json()

  return (
    <div>
      <h1>Productos con filtro (ISR + Client)</h1>
      <ProductList products={products} />
    </div>
  )
}

