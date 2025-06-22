import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 w-full flex flex-col justify-between items-start gap-12 lg:flex-row animate-fade-in-up">
            <form className="border-blue-400 border-2 rounded-2xl py-8 px-6 flex flex-col w-full gap-6 lg:w-[48%] bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 animate-slide-in-left">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        className="border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 hover:shadow-md focus:scale-105"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        className="border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 hover:shadow-md focus:scale-105"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium text-gray-700">
                        Message:
                    </label>
                    <textarea
                        className="border border-gray-300 focus:border-2 bg-gray-50 focus:bg-white p-3 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 min-h-[120px] resize-vertical hover:shadow-md focus:scale-105"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform active:scale-95"
                >
                    Send Message
                </button>
            </form>

            <div className="flex flex-col gap-8 w-full lg:w-[48%] lg:pl-8 animate-slide-in-right">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="text-blue-600 text-xl group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300"
                    />
                    <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                        0933191480
                    </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-blue-600 text-xl group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300"
                    />
                    <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                        shmuye27@gmail.com
                    </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-blue-600 text-xl group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300"
                    />
                    <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                        Addis Ababa, Ethiopia
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
