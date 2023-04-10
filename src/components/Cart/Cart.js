import "./Cart.css"
import { useCart } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ id, productName, price, quantity, img, size }) => {

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
        toast.error(`Se eliminó ${productName.toUpperCase()} `, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }





  return (
    <div>
      <div className="cart-box" >

        <div className="cart-box-img">
          <img src={img} style={{ height: 80 }} />
          <p className="cart-box-title">
            {productName} {size}{" "}
          </p>
        </div>


        <div>
          <p className="cart-box-title">Cantidad</p>
          <p>{quantity}</p>
        </div>


        <div>
          <p className="cart-box-title">precio</p>
          <p>${price.toLocaleString()}</p>
        </div>


        <div>
          <p className="cart-box-title">SubTotal</p>
          <p>${(price * quantity).toLocaleString()} </p>
        </div>
        
        
        <button onClick={handleRemoveItem} className="cart-button-delete"><i className='bx bx-trash'> Eliminar</i></button>



      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
