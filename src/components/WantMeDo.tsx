import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState("");

  const handleAddProduct = () => {
    if (productName.trim() !== "") {
      const newProduct: Product = {
        id: Date.now(),
        name: productName,
      };
      setProducts([...products, newProduct]);
      setProductName("");
    }
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>商品展示列表</h1>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleAddProduct}>添加</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleDeleteProduct(product.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;