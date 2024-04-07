import React, { useState } from "react";
import "./style/suggestion.scss";
import BackBtn from "@/encapsulationTemplate/BackBtn";
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
    <>
      <BackBtn />
      <div style={{position:'fixed',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
        <div>
          <h1>搜索建议商品</h1>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button onClick={handleAddProduct}>加入</button>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}
                <button onClick={() => handleDeleteProduct(product.id)}>
                  删除
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <form className="form">
            <label htmlFor="nome">发表建议:</label>
            <input type="text" className="infos" id="nome" name="nome" />
            <div className="mario"></div>
            <label htmlFor="email">接收邮箱:</label>
            <input type="email" id="email" name="email" />
            <button type="submit" className="suggestionBtn">
              Send
            </button>
            <button type="reset" id="limpar" className="suggestionBtn">
              Clear
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductList;
