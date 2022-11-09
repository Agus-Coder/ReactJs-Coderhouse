import { useParams } from "react-router-dom"

export const ItemDetail = () =>{
    const {productId} = useParams()
    console.log(productId)
    return (
    <>
    <h1>welcome to the {`${productId}`} section</h1>
    </>
    )
}