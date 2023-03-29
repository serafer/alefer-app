import './ItemCounter.css'

const ItemCounter = () => {



    return (

       <div className='item-counter-box'>          
            <div className='controls'>
                <button className="buttons selector" >-</button>
                <p className='numb'>1</p>
                <button className="buttons selector" >+</button>
            </div>
            <div>
                <button className="buttons" >Agregar al carrito</button>
            </div>
       </div>
    )
}

export default ItemCounter