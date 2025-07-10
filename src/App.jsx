import { useState, useEffect } from "react"
import Project from "./components/Project"
import youtubeClone from '/assets/youtube-clone.png'
import TodoImage from "/assets/todo.jpg"
import ResearchImage from "/assets/research.jpg"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import { faPhone, faCode } from "@fortawesome/free-solid-svg-icons"
import { faFigma } from "@fortawesome/free-brands-svg-icons"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000) // 3 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 animate-fade-in">
            <section id="Home">
                <Home />
            </section>

            <section id="About" className="py-16 md:py-20">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-800 animate-fade-in-up">
                        About Me
                    </h1>
                    <About />
                </div>
            </section>

            <section id="Services" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">
                        Services
                    </h1>
                    <div className="px-4 md:px-8 lg:px-16 flex flex-col justify-between items-stretch gap-8 md:flex-row md:flex-wrap">
                        <Service
                            title="Full Stack Development"
                            description="I build end-to-end web solutions — from sleek frontends to robust backends — using modern technologies like React, Node.js, Express, and MongoDB. I focus on clean code, performance, and user experience to deliver responsive, scalable, and production-ready applications."
                            Icon={faCode}
                            index={0}
                        />
                        <Service
                            title="Mobile App Development"
                            description="I build high-performance, visually appealing mobile applications using Flutter for iOS and Jetpack Compose for Android. By combining the strengths of these modern UI frameworks, I deliver native-quality apps with consistent functionality and design across both platforms."
                            Icon={faPhone}
                            index={1}
                        />
                        <Service
                            title="UI/UX Design"
                            description="I design clean, intuitive, and user-centered interfaces that elevate the user experience. From wireframes to final visuals, I focus on usability, accessibility, and aesthetics to ensure your product is both functional and visually engaging."
                            Icon={faFigma}
                            index={2}
                        />
                    </div>
                </div>
            </section>

            <section id="Projects" className="py-16 md:py-20">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">
                        Projects
                    </h1>
                    <div className="px-4 md:px-8 lg:px-16 flex flex-col justify-between items-stretch gap-8 md:flex-row md:flex-wrap">
                        <Project
                            title="Research Collaboration App"
                            description="A mobile app that helps researchers to conduct their research smoothly. The app is built with Jetpack Compose for the UI and Nest with PostgreSQL for the backend. I contributed to the backend of the app."
                            image={ResearchImage}
                            githubURL="https://github.com/shmuye/Research-collaboration-app"
                            index={0}
                        />
                        <Project
                            title="Youtube clone"
                            description="A Youtube clone website build with React and Material UI which replicates the basic functionalities of Youtube."
                            image={youtubeClone}
                            githubURL="https://github.com/shmuye/youtube-clone"
                            index={1}
                        />
                        <Project
                            title="Todo App"
                            description="A modern React todo application with priorities, categories, and smart filtering. Features include task management, due dates, and a clean, intuitive interface for productivity."
                            image={TodoImage}
                            githubURL="https://github.com/shmuye/Todo"
                            index={2}
                        />
                    </div>
                </div>
            </section>

            <section id="Contact" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">
                        Have a project? Let's Get in touch.
                    </h1>
                    <Contact />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default App
