import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import Loader from "../../Loader/Loader";


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    const { itemId } = useParams()

    useEffect(() => {
        getProductsById (itemId).then(response => {
            setProducts (response)
        }).catch(error => {
            console.log(error)
        }). finally (()=> {setLoading(false)})

    }, [itemId])

    if(loading) {
        return (
           <div style = {{margin : 150}} >
               <Loader />
            
           </div> 
        )
    }

    return (
        <div className="item-detail-container" >
            <h2> Detalle del producto </h2>
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer