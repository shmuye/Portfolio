import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import hamburger from '../assets/menu.png'
import close from '../assets/close.png'
import { useState } from "react"

const Header = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <header className='font-Roboto mt-4 mx-4 text-white sticky px-2 flex justify-between'>
            <p className='font-bold text-2xl'>Shmuye</p>
            <nav>
                <ul className='hidden sm:flex  sm:justify-end  sm:gap-4'>
                    <li className='text-xl hover:underline hover:cursor-pointer '>Home</li>
                    <li className='text-xl hover:underline hover:cursor-pointer '>About</li>
                    <li className='text-xl hover:underline hover:cursor-pointer '>Services</li>
                    <li className='text-xl hover:underline hover:cursor-pointer '>Projects</li>
                    <li className='text-xl hover:underline hover:cursor-pointer '>Contact</li>
                </ul>
            </nav>
            <nav className="sm:hidden absolute right-0 top-0  rounded-2xl  flex flex-col items-center">
                <button className="hover:cursor-pointer" onClick={() => setExpanded(!expanded)}>{expanded ? <img src={close} alt="hamburger" /> : <img src={hamburger} alt="hamburger" />}</button>
                {
                    expanded &&
                    <ul className='flex flex-col items-center gap-4 mt-2'>
                        <li className='text-xl text-blue-400 hover:cursor-pointer '>Home</li>
                        <li className='text-xl text-blue-400 hover:cursor-pointer '>About</li>
                        <li className='text-xl text-blue-400 hover:cursor-pointer '>Services</li>
                        <li className='text-xl text-blue-400 hover:cursor-pointer '>Projects</li>
                        <li className='text-xl text-blue-400 hover:cursor-pointer '>Contact</li>
                    </ul>
                }

            </nav>
        </header>
    )
}

export default Header