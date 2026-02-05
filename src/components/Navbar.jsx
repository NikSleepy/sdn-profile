import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkAktive = ({ isActive }) =>
        isActive ? "text-blue-500" : "text-gray-500";

    return (
        <nav className="flex gap-6 p-4 border-b">
            <NavLink to="/" className={linkAktive}>
                Home
            </NavLink>
            <NavLink to="/about" className={linkAktive}>
                About
            </NavLink>
            <NavLink to="/contact" className={linkAktive}>
                Contact
            </NavLink>
        </nav>
    )
}