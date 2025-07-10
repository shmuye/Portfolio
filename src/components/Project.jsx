const Project = ({ title, description, image, githubURL, siteURL, index = 0 }) => {
    return (
        <div
            className="w-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 overflow-hidden transition-all duration-500 md:w-[48%] lg:w-[30%] hover:scale-105 hover:-translate-y-3 animate-fade-in-up group"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 flex-grow">
                <div className="flex-grow">
                    <h1 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                        {description}
                    </p>
                </div>
                <div className="flex gap-3">
                    {siteURL && (
                        <a
                            href={siteURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform"
                        >
                            View Site
                        </a>
                    )}
                    <a
                        href={githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform ${siteURL ? "flex-1" : "w-full"
                            }`}
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
