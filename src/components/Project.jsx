
const Project = ({ title, description, image, githubURL }) => {
    return (
        <div className='w-full h-auto flex flex-col items-center  rounded-[8px] shadow-lg border overflow-hidden sm:w-[30%] '>
            <img
                src={image}
                alt="vegetable"
                className='w-full h-[200px] object-cover'
            />
            <div className=' flex flex-col gap-8 text-center'>
                <div>
                    <h1 className='text-2xl font-bold my-2'>{title}</h1>
                    <p className='mx-4 mb-4'>
                        {description}
                    </p>
                </div>
                <a href={githubURL} className=' mx-4 mb-2 px-4 py-2 bg-blue-600 text-white cursor-pointer rounded transition'>Source Code</a>

            </div>
        </div>
    );
};

export default Project;
