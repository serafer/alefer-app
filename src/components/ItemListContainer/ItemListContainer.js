import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../../Loader/Loader"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)

    const {category} = useParams ()



    useEffect(() => {
        setLoading(true)
        const asyncFunction = category ? getProductsByCategory : getProducts

        asyncFunction(category)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])

    if(loading) {
        return (
           <div style = {{margin : 150}} >
               <Loader />
            
           </div> 
        )
    }


    return (
        <div>
            <h1><img src= "https://res.cloudinary.com/dxfhquzse/image/upload/v1679883912/OIG.hs0wxlNBWIwsjsP_zoom_dx7wuq.png" style={{width: 60}} />{greeting}</h1>

            <ItemList products={products} />

        </div>

    )

}

export default ItemListContainer