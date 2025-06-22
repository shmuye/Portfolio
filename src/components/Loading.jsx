const Loading = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">Shmuye</h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
                </div>

                {/* Cool Loading Animation */}
                <div className="relative">
                    <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-4 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>

                    {/* Spinning Ring */}
                    <div className="mt-8">
                        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                </div>

                <p className="text-white text-lg mt-6 animate-pulse">Loading Portfolio...</p>
            </div>
        </div>
    )
}

export default Loading
