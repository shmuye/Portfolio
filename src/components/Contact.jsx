import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    return (
        <div className="mx-4 w-full flex flex-col justify-between items-center gap-16 sm:flex-row flex-wrap">

            <form action="" className="border-blue-400 border-2 rounded-2xl py-8 px-4 flex flex-col w-full gap-4 sm:w-[45%]">
                <div className="flex flex-col gap-2">
                    <label for="name">Name: </label>
                    <input className=" border focus:border-2 border-gray-500 bg-gray-300  p-2 rounded focus:border-blue-400 focus:outline-none hover:cursor-pointer" id="name" type="text" placeholder="Name" />
                </div>
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input className=" border focus:border-2 bg-gray-300 p-2 rounded focus:border-blue-400 focus:outline-none hover:cursor-pointer " id="email" type="email" placeholder="email" />
                </div>
                <div className="flex flex-col">
                    <label for="message">Message: </label>
                    <textarea className=" border focus:border-2 bg-gray-300  p-2 rounded focus:border-blue-400  focus:outline-none hover:cursor-pointer" name="message" id="message" placeholder="message" />
                </div>
                <button type="submit" className="bg-blue-400 text-white py-2 rounded cursor-pointer">Send</button>
            </form>
            <div className="flex flex-col gap-8  w-full sm:w-[45%]">
                <div className="flex  gap-4">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="text-[16px]">0933191480</p>
                </div>
                <div className="flex  gap-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="text-[16px]">shmuye27@gmail.com</p>
                </div>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="text-[16px]">Addis Ababa, Ethiopia</p>
                </div>

            </div>
            <div></div>
        </div>
    )
}

export default Contact