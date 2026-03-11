import { Link } from "react-router-dom"

export default function Navbar() {

    return (

        <nav className="navbar">

            <div className="container">

                <Link to="/" className="logo">
                    RAM 3D STUDIO
                </Link>

                <div className="nav-links">

                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </div>

            </div>

        </nav>

    )

}