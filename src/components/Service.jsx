import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Service = ({ Icon, title, description, index = 0 }) => {
    return (
        <div
            className="w-full bg-white p-6 rounded-xl hover:shadow-lg hover:shadow-gray-200 transition-all duration-500 border border-gray-100 md:w-[48%] lg:w-[30%] hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="mb-4">
                <FontAwesomeIcon
                    icon={Icon}
                    className="text-blue-600 text-3xl mb-4 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300 group-hover:animate-bounce"
                />
            </div>
            <h1 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                {description}
            </p>
        </div>
    )
}

export default Service
