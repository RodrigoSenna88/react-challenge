import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, setSortType } = props;
  return (
    <main className="block col-2">
      <div>
        Ordenar por
        <select className="Box" onChange={(e) => setSortType(e.target.value)}>        
          <option value="name">Nome</option>
          <option value="score">Popularidade</option>
          <option value="price">Preço</option>
        </select>
      </div>
      <div className=" productBox">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
