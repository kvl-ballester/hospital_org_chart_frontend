import { useParams } from "react-router-dom"

export default function DepartmentDetail() {
    const {name} = useParams()
    return <div className="main">
        department details {name}
    </div>
}