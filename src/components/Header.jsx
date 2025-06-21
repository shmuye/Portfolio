import hamburger from '../assets/menu.png'
import close from '../assets/close.png'
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
            el.scrollIntoView({ behaviour: 'smooth' });
            setExpanded(false);
        }
    }
    return (
        <>

            <header className={`font-Roboto pt-4 mx-4 text-white sticky px-2 flex justify-between ${expanded ? 'z-50' : ''}`}>
                <p className='font-bold text-2xl'>Shmuye</p>
                <nav>
                    <ul className='hidden sm:flex  sm:justify-end  sm:gap-4'>
                        {
                            NavLinks.map(link => (
                                <li
                                    key={link.id}
                                    className="text-white list-none cursor-pointer"
                                    onClick={() => {
                                        handleNavClick(link.id)
                                    }}
                                >
                                    {link.label}

                                </li>
                            ))
                        }

                    </ul>
                </nav>
                <img className='sm:hidden hover:cursor-pointer z-50' onClick={() => setExpanded(!expanded)} src={expanded ? close : hamburger} alt="menu" />
            </header>


            {
                expanded && (


                    <ul className='fixed inset-0  w-full bg-gray-500  z-40 flex flex-col  items-center gap-4 pt-20'>
                        {
                            NavLinks.map(link => (
                                <li
                                    key={link.id}
                                    className="text-white list-none cursor-pointer"
                                    onClick={() => handleNavClick(link.id)}>
                                    {link.label}

                                </li>
                            ))
                        }
                    </ul>
                )


            }
        </>
    )
}

export default Header