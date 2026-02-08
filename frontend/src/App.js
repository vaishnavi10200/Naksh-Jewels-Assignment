import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { useCart } from './CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const { addToCart } = useCart();
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

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'products' ? (
        <div className="App">
          <div className="product-list">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
}

export default App;
