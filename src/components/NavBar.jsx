import { Link } from "react-router-dom";

export default function NavBar(params) {
    return <nav>
        <ul>
            <li><Link to="/department">Department</Link></li>
            <li><Link to="/employee">Employee</Link></li>
        </ul>
    </nav>
}