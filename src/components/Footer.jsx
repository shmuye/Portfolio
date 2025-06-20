import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
    return (
        <div className="py-8 bg-[#222] text-blue-600 flex flex-col gap-8 w-full justify-center items-center sm:[45%]">
            <div className="flex gap-4 text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-600 transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
            </div>
            <p><FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}  Shmuye Ayalneh. All rights reserved-designed by shmuye Ayalneh. </p>
        </div>
    )
}

export default Footer