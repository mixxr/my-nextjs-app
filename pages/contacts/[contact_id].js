import { useRouter} from "next/router"
import contacts from "../api/contacts"
import Link from "next/link"
import MenuLayout from "../../components/MenuLayout"

export default function Contact() {
    const router = useRouter()
    const { contact_id } = router.query
    console.log('contact_id:', contact_id) // browser console
    const contact = contacts.find(c => c.id === contact_id)
    if (contact === undefined)
        return (<><h1>Contact Not Found</h1><br></br><Link href="..">Back</Link></>)
    return (<MenuLayout>
        <h1> Contact { contact.id } </h1>
        <h2>has real name { contact.name } who coming from { contact.country } </h2>
        <br></br>
        <Link href="..">Back</Link>
        <br/>
        <a href="#" onClick={ _ => router.back()}>back with useRouter</a>
    </MenuLayout>)
} 