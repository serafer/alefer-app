import Navbar from './components/Navbar/Navbar';
import SuperiorNavbar from './components/SuperiorNavbar/SuperiorNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <BrowserRouter>
        <CartProvider>
          <SuperiorNavbar />
          <Navbar />
          <Routes>
            <Route path="/alefer-app/" element={<ItemListContainer greeting={'Andes Drink Co | E-Commerce'} />} />
            <Route path="/alefer-app/category/:category" element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path="/alefer-app/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/alefer-app/cart" element={<CartContainer  greeting={'Cart'}/> } />
            <Route path="/alefer-app/CheckOut" element={<h1>CheckOut</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
