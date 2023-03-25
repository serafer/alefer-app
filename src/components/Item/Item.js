import "./Item.css";

const Item = ({ productName, img, price, size }) => {
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
                    <button className="card-button-details">Ver</button>
                </div>

            </div>
        </div>
    );
};

export default Item;