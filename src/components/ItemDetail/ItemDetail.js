import './ItemDetail.css'

const ItemDetail = ({ id, productName, img, category, description, price, stock,productBrandName, productCategory }) => {

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
                <div className='card-detail-q-box'>
                    <p> Cantidad </p>
                    <p> + 1 - </p>
                </div>
                <button className='card-detail-add-button' >Añadir al carrito </button>
                <div>
                    <p className='card-detail-description-title'>Descripción del producto</p>
                    <p className='card-detail-description'> {description} </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail