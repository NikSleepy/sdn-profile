import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkActive = ({ isActive }) =>
        `px-4 py-2 rounded 
     ${isActive ? "text-blue-500" : "text-gray-300 hover:text-white"}`;

    return (
        <nav className="bg-black text-white border-b relative">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <h1 className="text-lg font-bold">Logo</h1>

                {/* Desktop menu */}
                <div className="hidden sm:flex gap-6">
                <NavLink to="/" className={linkActive}>
                    Home
                </NavLink>
                <NavLink to="/about" className={linkActive}>
                    About
                </NavLink>
                </div>

                {/* Hamburger */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white hover:bg-gray-700 rounded-md"
                    >
                        {isOpen ? <IoClose size={22} /> : <GiHamburgerMenu size={22} />}
                    </button>
                </div>
            </div>

            <div
                className={`absolute right-4 top-14 z-50 w-48
                bg-black rounded-lg shadow-lg border
                transition-all duration-200
                ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            > 
                <div className="flex flex-col gap-2 p-2">
                <NavLink
                    to="/"
                    className={linkActive}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={linkActive}
                    onClick={() => setIsOpen(false)}
                >
                    About
                </NavLink>
                </div>
            </div>
        </nav>
    )
}