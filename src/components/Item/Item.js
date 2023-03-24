const Item = ({ productName, img, price }) => {

    return (

        <div >
            <h3>{productName}</h3>
            <img src={img} alt={productName}  style= {{width:100}} />
            <p>Precio: ${price} </p>
        </div>

    )

}


export default Item