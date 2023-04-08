import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])


    const {category} = useParams ()



    useEffect(() => {
        const asyncFunction = category ? getProductsByCategory : getProducts

        asyncFunction(category)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [category])

/*         console.log (getProducts())
        console.log (getProductsByCategory(category)) */



    return (
        <div>
            <h1><img src= "https://res.cloudinary.com/dxfhquzse/image/upload/v1679883912/OIG.hs0wxlNBWIwsjsP_zoom_dx7wuq.png" style={{width: 60}} />{greeting}</h1>

            <ItemList products={products} />

        </div>

    )

}

export default ItemListContainer