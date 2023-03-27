import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {

    return (


        <div className='ChartWidget'>

            <p style={{margin: 0}} >ir al carrito</p>
            
            
            <img src={cart} alt='icono de carro de compras' />
            
            <p style={{margin: 0}} > 0 Articulos $0.000 </p>

        </div>
    )

}

export default CartWidget