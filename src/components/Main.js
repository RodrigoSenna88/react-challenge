import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <div>
        Ordenar por
        <select>
        <option value="valor1">Nome</option>
          <option value="valor2" selected>
            Preço
          </option>
          <option value="valor3">Popularidade</option>
        </select>
      </div>
      <h2>Products</h2>
      <div className=" productBox">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
