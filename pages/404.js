import MenuLayout from "../components/MenuLayout"
import png404 from "../public/404.png"
import Image from "next/image"

export default function NotFound() {
    return(
        <MenuLayout section="products">

            <h1><b>404</b> | Not Found Page</h1>
            <Image src={png404} alt="404 not found page image"/>
            <style jsx>
                {`
                    h1 {
                        color: chocolate;
                    }
                `}

            </style>
        </MenuLayout>
    )
}