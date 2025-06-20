import profile from '../assets/profile.png'
const About = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-8 md:flex-row">
            <div className="ml-4 w-full p-4  rounded sm:w-[45%]">
                <p className='mb-2'>My name is <b>Shmuye Ayalneh</b>, and I am a 22-year-old software engineering student at Addis Ababa University. I am also a passionate full-stack developer who enjoys building complete web applications using the latest technologies.</p>
                <p>My love for mathematics sparked my interest in coding and led me to pursue software engineering</p>
            </div>
            <img src={profile} alt="profile" className="mr-4 shadow-lg shadow-gray-500  w-full h-[400px] rounded sm:w-[40%] " />


        </div>
    )
}

export default About