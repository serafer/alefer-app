import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({id, productName, img, price, size }) => {

    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={img} alt={productName} />
            </div>
            <div className="card-body">
                <h3 className="card-tittle">
                    {productName} {size}{" "}
                </h3>
                <p className="card-price">Precio: ${price} </p>

                <div className="card-buttons">
                    <button className="card-button-add"><i class="bx bx-plus"></i>{"Añadir"}</button>
                    <Link to={`/alefer-app/item/${id}`} className='card-button-details'>Ver detalle</Link>
                </div>

            </div>
        </div>
    );
};

export default Item;