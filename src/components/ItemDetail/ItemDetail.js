import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemOutOfStock from '../ItemOutOfStock/ItemOutOfStock'

const ItemDetail = ({ id, productName, img, category, description, price, stock,productBrandName, productCategory }) => {

    const handleOnAdd = (quantity) => {

        console.log ( `se agregaron ${quantity} de ${productName} `)
    }



    return (

        <div key={id} className='card-detail-container'>
            <div className='card-detail-container-img'>
                <img className="card-detail-img" src={img} alt={productName} />
            </div>
            <div className='card-detail-body' >
            <p className='card-detail-breadcrumbs' >Inicio > {category} > {productCategory} > {productBrandName} > {productName} </p>
            <h3 className='card-detail-title' >{productName}</h3>
                <p className='card-detail-price' >${price}</p>
                <div className='card-detail-msj'> <i class='bx bxs-truck'> Envío sin cargo en compras superiores a $10.000</i></div>
                <div className='card-detail-msj'><i class='bx bx-store-alt'> Retiro disponible en tienda</i></div>
                
                {stock==0 ? (<ItemOutOfStock/>) : (<ItemCounter onAdd={handleOnAdd} stock={stock} initial={1} />)}
                
                <div>
                    <p className='card-detail-description-title'>Descripción del producto</p>
                    <p className='card-detail-description'> {description} </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail