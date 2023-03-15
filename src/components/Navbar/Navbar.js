import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Navbar = () => {

    return (
        <nav className="Navbar" bg ={'Warning'} >

            <h1>CB</h1>
            
            <div className='NavButtons'>

                <Button variant= "light" label= 'inicio'>inicio</Button>
                <Button variant= "light" label= 'marcas'>marcas</Button>
                <Button variant= "light" label= 'productos'>productos</Button>
                <Button variant= "light" label= 'odertas'>ofertas</Button>
                <Button variant= "light" label= 'contacto'>contacto</Button>
                
                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Ir</Button>
          </Form>


            </div>



        </nav>
    )


}

export default Navbar