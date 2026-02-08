import { useCart } from './CartContext';

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="App">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="App">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="cart-item-total">
              ₹{item.price * item.quantity}
            </div>
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
}

export default Cart;