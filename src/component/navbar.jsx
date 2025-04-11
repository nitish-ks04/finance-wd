import "../css/navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-brand">
                <a href="/">Finance app</a>
            </div>
            <div className="nav-link">
                <a href="/">Home</a>
                <a href="/abo_us">About us</a>
                <a href="/profile">Profile</a>
            </div>
        </nav>
    );
}

export default Navbar