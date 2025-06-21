import Project from "./components/Project";
import Image from "./assets/web.jpg"
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const App = () => {
    return (
        <div className="mx-auto  
        w-full  min-h-screen flex flex-col gap-8">
            <Home />
            <h1 id="About" className="text-2xl text-center font-bold">About Me</h1>
            <About />
            <h1 id="Services" className="text-2xl font-bold text-center ">Services</h1>
            <div className="mx-4 flex flex-col justify-between items-center gap-8 sm:flex-row flex-wrap  ">
                <Service
                    title="Mobile App Development"
                    description="I build high-performance, visually appealing mobile applications using Flutter for iOS and Jetpack Compose for Android. By combining the strengths of these modern UI frameworks, I deliver native-quality apps with consistent functionality and design across both platforms."
                    Icon={faPhone}

                />
                <Service
                    title="Full Stack development"
                    description="I build end-to-end web solutions — from sleek frontends to robust backends — using modern technologies like React, Node.js, Express, and MongoDB. I focus on clean code, performance, and user experience to deliver responsive, scalable, and production-ready applications."
                    Icon={faCode}

                />
                <Service
                    title="UI/UX Design"
                    description="I design clean, intuitive, and user-centered interfaces that elevate the user experience. From wireframes to final visuals, I focus on usability, accessibility, and aesthetics to ensure your product is both functional and visually engaging."
                    Icon={faFigma}
                />
            </div>
            <h1 id="Projects" className="text-2xl font-bold  text-center">My Projects</h1>
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
            <h1 id="Contact" className="text-2xl font-bold text-center">Have a project? Let's Get in touch.</h1>
            <Contact />
            <Footer />
        </div>

    )
}

export default App