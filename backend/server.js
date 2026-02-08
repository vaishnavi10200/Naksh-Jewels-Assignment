require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { validateCart } = require('./middleware');

const app = express();

app.use(cors());
app.use(express.json());

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

let cart = [];

app.get('/products', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/cart', validateCart, (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    
    res.json({ message: 'Item added to cart', cart });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});