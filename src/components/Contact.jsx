import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 w-full flex flex-col justify-between items-start gap-12 lg:flex-row">

            <form action="" className="border-blue-400 border-2 rounded-2xl py-8 px-6 flex flex-col w-full gap-6 lg:w-[48%] bg-white shadow-sm">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-gray-700">Name: </label>
                    <input
                        className=" border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200"
                        id="name"
                        type="text"
                        placeholder="Enter your Name: " />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-700">Email: </label>
                    <input className="border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 "
                        id="email"
                        type="email"
                        placeholder="Enter your email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium text-gray-700">
                        Message:
                    </label>
                    <textarea
                        className="border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 min-h-[120px] resize-vertical"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg cursor-pointer transition-colors duration-300 font-medium"
                >
                    Send Message
                </button>
            </form>
            <div className="flex flex-col gap-8 w-full lg:w-[48%] lg:pl-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl" />
                    <p className="text-gray-700 font-medium">0933191480</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-xl" />
                    <p className="text-gray-700 font-medium">shmuye27@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 text-xl" />
                    <p className="text-gray-700 font-medium">Addis Ababa, Ethiopia</p>
                </div>
            </div>

        </div>
    )
}

export default Contact