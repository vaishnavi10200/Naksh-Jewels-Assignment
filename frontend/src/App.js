import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductCard from './ProductCard';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Gold Ring",
      price: 15000,
      image: "Gold-Ring.jpg"
    },
    {
      id: 2,
      name: "Diamond Necklace",
      price: 50000,
      image: "Diamond-Necklace.png"
    },
    {
      id: 3,
      name: "Silver Bracelet",
      price: 8000,
      image: "Silver-Bracelet.jpg"
    }
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  return (
    <div>
      <Header cartCount={cart.length}/>
      <div className="App">
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
