import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState, useEffect } from 'react';


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([]);
  const [sortType, setSortType] = useState('name');

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        score: 'score',
        price: 'price'
      };
      const sortProperty = types[type];
      const sorted = [...products].sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) { return -1; }
        if (a[sortProperty] > b[sortProperty]) { return 1; }
        return 0;
      });
      setProductList(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main
          products={productList}
          onAdd={onAdd}
          setSortType={setSortType}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
