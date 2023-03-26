import Navbar from './components/Navbar/Navbar';
import SuperiorNavbar from './components/SuperiorNavbar/SuperiorNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <SuperiorNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a la tienda de CB'} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
