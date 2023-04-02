import './ItemCounter.css'
import { useState } from 'react'

const ItemCounter = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(prevQuantity => prevQuantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prevQuantity => prevQuantity-1)
        }     
    }

    return (

       <div className='item-counter-box'>          
            <div className='controls'>
                <button className="buttons selector" onClick={decrement} >-</button>
                <p className='numb'>{quantity}</p>
                <button className="buttons selector" onClick={increment}>+</button>
            </div>
            <div>
                <button className="buttons" onClick={() => onAdd (quantity)} >Agregar al carrito</button>
            </div>
       </div>
    )
}

export default ItemCounter