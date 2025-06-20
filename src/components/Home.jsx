import Header from './Header'
import background from '../assets/background.jpg'
const Home = () => {
    return (
        <div
            style={{ backgroundImage: `URL(${background})` }}
            className='min-h-screen bg-cover bg-center w-full' >
            <Header />
            <hgroup className='text-white absolute mx-auto left-8 top-32 md:right-8  '>
                <h1 className='text-5xl mb-8 font-bold'>Hey I'm Shmuye Ayalneh</h1>
                <h2 className='text-2xl'>Full Stack Developer</h2>
            </hgroup>

        </div>


    )
}
export default Home