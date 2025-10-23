/*
// Ejercicio 3
export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products', {
        next: { revalidate: 60 }, // Revalida cada 60s
    })
    const products = await res.json()
    const date = new Date().toLocaleTimeString()

    return (
        <div>
            <h1>Productos (ISR)</h1>
            <p>Página generada a las: {date}</p>
            <ul>
                {products.slice(0, 5).map(p => <li key={p.id}>{p.title}</li>)}
            </ul>
        </div>
    )
}*/
// ejercicio 4
'use client'
import { useState } from "react"
export default function ProductList({ products }) {
  const [filter, setFilter] = useState('')

  const filtered = products.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border p-1"
      />
      <ul>
        {filtered.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}

