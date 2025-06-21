import profile from '../assets/profile.png'
const About = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-8 md:flex-row">
            <div className="ml-4 w-full p-4  rounded sm:w-[45%]">
                <p className='mb-16'>My name is My name is <b>Shmuye Ayalneh</b>, a 22-year-old software engineering student at Addis Ababa University and a dedicated, disciplined full-stack developer. I have a deep passion for building robust, user-friendly web applications using modern technologies. My journey into software engineering was inspired by my strong love for mathematics, which sharpened my problem-solving mindset and fueled my drive to create impactful digital solutions.</p>


                <a href='https://drive.google.com/file/d/1Nsgplk0idgCpkYgxwNoSlzfiZ9JxWRLQ/view?usp=sharing' className='underline-none hover:cursor-pointer  py-4 px-8 bg-blue-600 text-white'>Download CV</a>
            </div>
            <img src={profile} alt="profile" className="mr-4 shadow-lg shadow-gray-500  w-full h-[400px] rounded sm:w-[40%] " />


        </div>
    )
}

export default About