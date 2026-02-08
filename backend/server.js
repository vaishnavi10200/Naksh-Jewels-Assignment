const express = require('express');
const cors = require('cors');

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

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});