import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faLinkedin, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white flex flex-col gap-6 w-full justify-center items-center animate-fade-in">
            <div className="flex gap-6 text-2xl">
                <a
                    href="https://x.com/shmuye115933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                >
                    <FontAwesomeIcon icon={faTwitterSquare} className="hover:animate-bounce" />
                </a>
                <a
                    href="https://www.linkedin.com/in/shmuye-Ayalneh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="hover:animate-bounce" />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-100 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                >
                    <FontAwesomeIcon icon={faGithub} className="hover:animate-bounce" />
                </a>
                <a
                    href="https://t.me/shudev27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                >
                    <FontAwesomeIcon icon={faTelegram} className="hover:animate-bounce" />
                </a>
            </div>
            <p className="text-center text-gray-400 text-sm px-4 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faCopyright} className="mr-1 animate-pulse" />
                {new Date().getFullYear()} Shmuye Ayalneh. All rights reserved - designed by Shmuye Ayalneh.
            </p>
        </footer>
    )
}

export default Footer
