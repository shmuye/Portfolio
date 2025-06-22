"use client"

import hamburger from "../assets/menu.png"
import close from "../assets/close.png"
import { useState } from "react"

const NavLinks = [
    { label: "Home", id: "Home" },
    { label: "About", id: "About" },
    { label: "Projects", id: "Projects" },
    { label: "Services", id: "Services" },
    { label: "Contact", id: "Contact" },
]

const Header = () => {
    const [expanded, setExpanded] = useState(false)

    const handleNavClick = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
            setExpanded(false)
        }
    }

    return (
        <>
            <header className="font-Roboto pt-6 px-4 md:px-8 lg:px-16 text-white sticky top-0 z-50 flex justify-between items-center animate-slide-down">
                <p className="font-bold text-2xl md:text-3xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                    Shmuye
                </p>
                <nav>
                    <ul className="hidden md:flex md:gap-8 lg:gap-12">
                        {NavLinks.map((link, index) => (
                            <li
                                key={link.id}
                                className="text-white list-none cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300 font-medium animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleNavClick(link.id)}
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="md:hidden hover:cursor-pointer z-50 p-2 hover:scale-110 transition-transform duration-300"
                    onClick={() => setExpanded(!expanded)}
                    aria-label="Toggle menu"
                >
                    <img
                        src={expanded ? close : hamburger}
                        alt="menu toggle"
                        className={`w-6 h-6 transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
            </header>

            {expanded && (
                <div className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 z-40 md:hidden shadow-lg animate-slide-down backdrop-blur-sm">
                    <ul className="flex flex-col items-center gap-6 py-8 px-4">
                        {NavLinks.map((link, index) => (
                            <li
                                key={link.id}
                                className="text-white text-lg font-medium cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleNavClick(link.id)}
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Header
