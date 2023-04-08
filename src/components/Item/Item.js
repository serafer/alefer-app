import "./Item.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const Item = ({id, productName, img, price, size,stock }) => {


    const { addItem, isInCart } = useCart();

    const handleOnAdd = (quantity) => {
        const prodToAdd = { id, productName, price, quantity : 1 };
        addItem(prodToAdd);
    };


    
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
                {stock==0 ? ( <p className="out-stock-alert" >SIN STOCK</p> ) : (<button className="card-button-add" onClick={handleOnAdd} ><i class="bx bx-plus"></i>{"Añadir"}</button>)}

                    
                    <Link to={`/alefer-app/item/${id}`} className='card-button-details'>Ver detalle</Link>
                </div>

            </div>
        </div>
    );
};

export default Item;