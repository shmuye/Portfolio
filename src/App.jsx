import Project from "./components/Project";
import Image from "./assets/web.jpg"
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const App = () => {
    return (
        <div className="mx-auto  
        w-full  min-h-screen flex flex-col gap-8">

            <Home />
            <h1 className="text-2xl text-center font-bold">About Me</h1>
            <About />
            <h1 className="text-2xl font-bold text-center">Services</h1>
            <div className="mx-4 flex flex-col justify-between items-center gap-8 sm:flex-row flex-wrap  ">
                <Service
                    title="Mobile App Development"
                    description="I build high-performance, visually appealing mobile applications using Flutter for iOS and Jetpack Compose for Android. By combining the strengths of these modern UI frameworks, I deliver native-quality apps with consistent functionality and design across both platforms."
                    Icon={faPhone}

                />
                <Service
                    title="Mobile App Development"
                    description="I build high-performance, visually appealing mobile applications using Flutter for iOS and Jetpack Compose for Android. By combining the strengths of these modern UI frameworks, I deliver native-quality apps with consistent functionality and design across both platforms."
                    Icon={faPhone}

                />
                <Service
                    title="Mobile App Development"
                    description="I build high-performance, visually appealing mobile applications using Flutter for iOS and Jetpack Compose for Android. By combining the strengths of these modern UI frameworks, I deliver native-quality apps with consistent functionality and design across both platforms."
                    Icon={faPhone}

                />


            </div>
            <h1 className="text-2xl font-bold  text-center">My Projects</h1>
            <div className="mx-4 flex flex-col justify-between items-center gap-8 sm:flex-row flex-wrap  ">
                <Project
                    title="Reasearch collaboration app"
                    description="A mobile app that helps reasearchers to conduct their research smoothly. the app is built jetpack compose for the UI and Nest with PostgreSql for the backend. I contributed the backend of the app."
                    image={Image}
                    githubURL="https://github.com/shmuye/Research-collaboration-app"
                />
                <Project
                    title="Reasearch collaboration app"
                    description="A mobile app that helps reasearchers to conduct their research smoothly. the app is built jetpack compose for the UI and Nest with PostgreSql for the backend. I contributed the backend of the app."
                    image={Image}
                    githubURL="https://github.com/shmuye/Research-collaboration-app"
                />
                <Project
                    title="Reasearch collaboration app"
                    description="A mobile app that helps reasearchers to conduct their research smoothly. the app is built jetpack compose for the UI and Nest with PostgreSql for the backend. I contributed the backend of the app."
                    image={Image}
                    githubURL="https://github.com/shmuye/Research-collaboration-app"
                />
            </div>
            <h1 className="text-2xl font-bold text-center">Have a project? Let's Get in touch.</h1>
            <Contact />
            <Footer />



        </div>

    )
}

export default App