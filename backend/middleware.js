function validateCart(req, res, next) {
  const { productId, quantity } = req.body;
  
  if (!productId || typeof productId !== 'number') {
    return res.status(400).json({ error: 'Valid productId is required' });
  }
  
  if (!quantity || quantity < 1) {
    return res.status(400).json({ error: 'Quantity must be at least 1' });
  }
  
  next();
}

module.exports = { validateCart };