import { useRouter} from "next/router"
import topics from "../api/topics"

export default function Learn() {
    const router = useRouter()
    const { name_param } = router.query
    console.log(name_param) // browser console
    const topic = topics.find(topic => topic.id === name_param)
    if (topic === undefined)
        return (<h1>Topic Not Found</h1>)
    return (<h1>Learn {topic.id} (Dynamic)</h1>)
} 