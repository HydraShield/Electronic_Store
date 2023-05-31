import { Link } from "react-router-dom"
import "./Style.css"

export const NavBar = () => {

    return (
        <div>
            <nav className="navbar">
                <Link className="link" to="/items">Items</Link>
                <Link className="link" to="/stocks">Stocks</Link>
                <Link className="link" to="/bills">Bills</Link>
                <Link className="link" to="/orders">Orders</Link>
            </nav>
        </div>
    )
}