import profile from "../assets/profile.png"

const About = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-8 px-4 md:flex-row md:px-8 lg:px-16 animate-fade-in-up">
            <div className="w-full p-6 rounded-lg md:w-[55%] lg:w-[50%] animate-slide-in-left">
                <p className="mb-8 text-gray-700 leading-relaxed text-base md:text-lg hover:text-gray-600 transition-colors duration-300">
                    My name is <b className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Shmuye Ayalneh</b>,
                    a 22-year-old software engineering student at Addis Ababa University and a dedicated, disciplined full-stack
                    developer. I have a deep passion for building robust, user-friendly web applications using modern
                    technologies. My journey into software engineering was inspired by my strong love for mathematics, which
                    sharpened my problem-solving mindset and fueled my drive to create impactful digital solutions.
                </p>
                <a
                    href="https://drive.google.com/file/d/1Nsgplk0idgCpkYgxwNoSlzfiZ9JxWRLQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block no-underline hover:no-underline py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform"
                >
                    Download CV
                </a>
            </div>
            <div className="w-full md:w-[40%] lg:w-[45%] flex justify-center animate-slide-in-right">
                <img
                    src={profile || "/placeholder.svg"}
                    alt="Shmuye Ayalneh profile"
                    className="w-full max-w-sm h-auto aspect-square object-cover rounded-lg shadow-lg shadow-gray-400 md:max-w-none md:h-[400px] hover:scale-105 hover:shadow-xl transition-all duration-500 hover:rotate-2"
                />
            </div>
        </div>
    )
}

export default About
