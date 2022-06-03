import Home from './Components/Home/index';
import { CartProvider } from './Context/CartContext';
import './App.scss';



function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
