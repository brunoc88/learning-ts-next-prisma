import { useState } from "react";
import Button from "@components/Button";
import Card from "@components/Card";
import LayOut from "@components/LayOut";
import Input from "@components/Input";
import ProductList from "@components/ProductList";
import { Product } from "types/Product";

const App = () => {
  const [text, setText] = useState("");
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "leche", price: 100 },
    { id: 2, name: "arroz", price: 200 }
  ]);

  const saludar = () => alert("¡Hola!");

  return (
    <div>
      <Button label="Saludar" onClick={saludar} />
      <Card title="Aprendiendo TypeScript + React" content="Vamos!" />
      <LayOut>
        <h1>Bienvenido</h1>
        <p>Este es el contenido</p>
      </LayOut>
      <Input value={text} onChange={setText} />
      <p>Valor actual: {text}</p>
      <ProductList products={products} />
    </div>
  );
};

export default App;
