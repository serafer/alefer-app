import Navbar from './components/Navbar/Navbar';
import SuperiorNavbar from './components/SuperiorNavbar/SuperiorNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <BrowserRouter>
        <SuperiorNavbar />
        <Navbar />
        <Routes>
          <Route path="/alefer-app/" element={<ItemListContainer  greeting={'Andes Drink Co | E-Commerce'} />} />
          <Route path="/alefer-app/category/:category" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
          <Route path="/alefer-app/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
