import './App.css';
import ProductCard from './ProductCard';

function App() {
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
    <div className="App">
      <h1>Naksh Jewels</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
