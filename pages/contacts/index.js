
import MenuLayout from "../../components/MenuLayout"
import contacts from "../api/contacts"
import Link from "next/link"

export default function Contacts(){

    console.log("creating (client side) Contacts page...") 
    return (
        <MenuLayout>
            <ul>
                {contacts.map(c => {
                    return (
                        <li key="{c.id}">
                            <Link href={`/contacts/${c.id}`}>
                                {c.name}
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </MenuLayout>
    )
}