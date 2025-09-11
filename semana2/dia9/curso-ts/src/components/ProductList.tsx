import { Product } from "types/Product" // si definiste el tipo en types.ts

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
