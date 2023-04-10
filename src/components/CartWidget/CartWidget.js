import cart from './assets/cart.svg'
import './CartWidget.css'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity, totalAmount } = useCart()

    return (


        <div className='ChartWidget'>

            <Link to="/alefer-app/cart" style={{margin: 0, color: "white", textDecoration: "none"}} >Ir al carrito</Link>
            
            <img src={cart} alt='icono de carro de compras' />
            
            <p style={{margin: 0}} > {totalQuantity === 0 ? `` : totalQuantity >1 ? `${totalQuantity} Articulos $${totalAmount.toLocaleString()}` : `${totalQuantity.toLocaleString()} articulo $${totalAmount.toLocaleString()}` } </p>

        </div>
    )

}

export default CartWidget