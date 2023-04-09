import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemOutOfStock from "../ItemOutOfStock/ItemOutOfStock";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({
    id,
    productName,
    img,
    category,
    description,
    price,
    stock,
    productBrandName,
    productCategory,
}) => {
    const { addItem, isInCart } = useCart();

    const handleOnAdd = (quantity) => {
        const prodToAdd = { id, productName, price, quantity };
        addItem(prodToAdd);

        toast.success(quantity > 1 ? `Se agregaron ${quantity} ${productName.toUpperCase()} ` : `Se agregó ${quantity} ${productName.toUpperCase()} `, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
    };

    return (
        <div key={id} className="card-detail-container">
            <div className="card-detail-container-img">
                <img className="card-detail-img" src={img} alt={productName} />
            </div>
            <div className="card-detail-body">
                <p className="card-detail-breadcrumbs">
          Inicio > {category} > {productCategory} > {productBrandName} >{" "}
                    {productName}{" "}
                </p>
                <h3 className="card-detail-title">{productName}</h3>
                <p className="card-detail-price">${price}</p>
                <div className="card-detail-msj">
                    {" "}
                    <i class="bx bxs-truck">
                        {" "}
                        Envío sin cargo en compras superiores a $10.000
                    </i>
                </div>
                <div className="card-detail-msj">
                    <i class="bx bx-store-alt"> Retiro disponible en tienda</i>
                </div>

                {stock == 0 ? (<ItemOutOfStock />) :
                    isInCart(id) ? (<Link to="/alefer-app/cart">Terminar compra</Link>) :
                        (<ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
                        )}

                <div>
                    <p className="card-detail-description-title">
                        Descripción del producto
                    </p>
                    <p className="card-detail-description"> {description} </p>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default ItemDetail;
