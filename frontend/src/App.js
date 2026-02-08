import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { useCart } from './CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
      console.log('Fetching products from backend...');
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      console.log('API URL:', API_URL);

      axios.get(`${API_URL}/products`)
      .then(response => {
        console.log('Products received:', response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="App"><h2>Loading...</h2></div>;
  }

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