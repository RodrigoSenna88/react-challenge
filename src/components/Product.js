import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="Box">
      <img className="small" src={`${process.env.PUBLIC_URL}/assets/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
