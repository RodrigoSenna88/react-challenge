import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const itemsQty = cartItems.reduce((a, c) => a + c.qty, 0);  

  const parcialShippingPrice = itemsQty * 10;
  const parcialTotalPrice = itemsPrice + parcialShippingPrice;

  const shippingPrice = parcialTotalPrice > 250 ? 0 : parcialShippingPrice;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>
      <img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`} />

        Itens
      </h2>
      <br/>
      <div>
        {cartItems.length === 0 && <div>O carrinho está vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Preço dos items</div>
              <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
            </div>
           
            <div className="row">
              <div className="col-2">Frete</div>
              <div className="col-1 text-right">
                R${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Preço total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implementar Finalizar Compra!')}>
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
