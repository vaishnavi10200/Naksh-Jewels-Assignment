import './App.css';

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
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
