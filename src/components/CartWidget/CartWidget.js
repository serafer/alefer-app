import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {

    return (


        <div className='ChartWidget'>

            <p>ir al carrito</p>
            
            
            <img src={cart} alt='icono de carro de compras' />
            
                <p> 0 Articulos $0.000 </p>

        </div>
    )

}

export default CartWidget