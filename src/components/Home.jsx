import Header from "./Header"
import background from "/assets/background.jpg"

const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10">
                <Header />
                <div className="text-white px-4 md:px-8 lg:px-16 mt-16 md:mt-24 lg:mt-32 animate-fade-in-up">
                    <hgroup className="max-w-4xl">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-bold leading-tight animate-slide-in-left">
                            Hey I'm Shmuye Ayalneh
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-medium animate-slide-in-right animation-delay-300">
                            Full Stack Developer
                        </h2>
                        <div className="mt-8 animate-bounce-slow animation-delay-1000">
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </hgroup>
                </div>
            </div>
        </div>
    )
}

export default Home
