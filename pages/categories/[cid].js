
import { CATEGORIES_URL, CATEGORY_TAG } from "."
import { searchData } from "../api"
import MenuLayout from "../../components/MenuLayout"

export default function Category({ category }) {
    if (category === null)
        return (<h1>Category Not Found!</h1>)
    return (<MenuLayout section="categories">
            <h1>Category {category.id}</h1><hr/>
            <p>Name: {category.name}</p><br/>
        </MenuLayout>)

}


// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    return {
      paths: [{ params: { cid: 'TS1' } }, { params: { cid: 'TS2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }

// Server side execution 
export async function getStaticProps({ params }) {
    const cid = params.cid
    console.log("category for",params, cid) // server console
    const categories = await searchData(CATEGORIES_URL, CATEGORY_TAG, "id", cid)
    console.log("categories",categories) // server console
    return {
        props: {
            category: categories[0] ?? null
        }
    }
}