import { useCart } from './CartContext';

function Header({ currentPage, setCurrentPage }) {
  const { cart } = useCart();
  
  return (
    <header style={{
      background: '#f8f3f3',
      color: 'black',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Naksh Jewels</h1>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => setCurrentPage('products')}
            style={{
              background: currentPage === 'products' ? '#007bff' : '#818181',
              color: 'white',
              border: '1px solid white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Products
          </button>
          <button 
            onClick={() => setCurrentPage('cart')}
            style={{
              background: currentPage === 'cart' ? '#007bff' : '#818181',
              color: 'white',
              border: '1px solid white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Cart ({cart.length})
          </button>
        </nav>
      </div> 
    </header>
  );
}

export default Header;