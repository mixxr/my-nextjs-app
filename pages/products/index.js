
import MenuLayout from "../../components/MenuLayout"
import Link from "next/link"
import { getData } from "../api"

export const CATALOG_URL = "https://eoht68m1upivih8.m.pipedream.net"
export const PRODUCTS_TAG = "products"

// Server and Client side execution 
export default function Products( {products} ){
    const dt = (new Date()).getTime()
    console.log("creating (server side) Products page...",dt) 
    // the {dt} creates an error: https://nextjs.org/docs/messages/react-hydration-error
    // because this function is executed both on client and on server producing 2 different results
    return (
        <MenuLayout section="products">
            <p key="dt">Products as at {dt}</p> 
            <ul key="products_list">
                {products.map(p => {
                    return (
                        <li key={p.id}>
                           <b>{p.name}</b> inStock: <b>{p.qty>2?'yes':'maybe'}</b> price: {p.price} {p.currency} <Link href={`/products/${p.id}`}>Details</Link>
                        </li>
                    )
                })}
            </ul>
        </MenuLayout>
    )
}

// Server side execution 
export async function getStaticProps(context){
    //const URL = "https://eoht68m1upivih8.m.pipedream.net"
    const ps = await getData(CATALOG_URL, PRODUCTS_TAG)
    console.log("getStaticProps",context, PRODUCTS_TAG, ps.length) 

    return {
        props: {
            products: ps?? []
        }
    }
}