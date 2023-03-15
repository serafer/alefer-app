import Navbar from './components/Navbar/Navbar';
import SuperiorNavbar from './components/SuperiorNavbar/SuperiorNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SuperiorNavbar/>
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a la tienda de CB'}/>

    </div>
  );
}

export default App;
