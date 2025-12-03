import { z } from "zod";

const ProductSchema = z.object({
  title: z.string(),
  price: z.number(),
});

// inferimos el tipo TypeScript
export type Product = z.infer<typeof ProductSchema>;

function printProduct(product: Product) {
  console.log(`Producto: ${product.title}`);
  console.log(`Precio: $${product.price}`);
}

const prod1: Product = { title: "Laptop", price: 1200 }; // ✅ OK
printProduct(prod1);

const prod2: Product = { title: "Mesa", price: "100" }; 
// ❌ ERROR TS: Type 'string' is not assignable to type 'number'

const prod3: Product = { title: "Silla" };
// ❌ ERROR TS: Property 'price' is missing


export default ProductSchema