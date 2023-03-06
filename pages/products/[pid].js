
import { CATALOG_URL, PRODUCTS_TAG } from "."
import { searchData } from "../api"
import MenuLayout from "../../components/MenuLayout"

export default function Product({ product }) {
    if (product === null)
        return (<h1>Product Not Found!</h1>)
    return (<MenuLayout section="products">
            <h1>Product {product.id}</h1><hr/>
            <p>Name: {product.name}</p><br/>
            <p>Price: {product.price} {product.currency}</p><br/>
            <p>Availability in stock: {product.qty}</p><br/>
            <p><i>Description: {product.description}</i></p><br/>
        </MenuLayout>)

}


// Server side execution 
export async function getServerSideProps({ params }) {
    const pid = params.pid
    console.log("searching for",params, pid) // server console
    const products = await searchData(CATALOG_URL, PRODUCTS_TAG, "id", pid)

    return {
        props: {
            product: products[0] ?? null
        }
    }
}