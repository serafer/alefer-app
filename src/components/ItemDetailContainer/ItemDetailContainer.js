import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById (itemId).then(response => {
            setProducts (response)
        }).catch(error => {
            console.log(error)
        })
    }, [itemId])



    return (
        <div className="item-detail-container" >
            <h2> ItemDetailContainer </h2>
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer