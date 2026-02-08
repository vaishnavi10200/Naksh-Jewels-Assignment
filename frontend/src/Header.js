import { useCart } from './CartContext';

function Header() {
  const { cart } = useCart();
  return (
    <header style={{
      background: '#f8f7f7',
      color: 'black',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>Naksh Jewels</h1>
      <div>Cart: {cart.length} items</div>
    </header>
  );
}

export default Header;