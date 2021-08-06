import Image from "next/image";
import wallpaper from '../public/fox.jpg'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image 
                src={wallpaper}
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute top-1/2 left-12'>
                {/* absolute top-1/2 w-full text-center */}
                <p className='font-semibold text-sm lg:text-4xl'>AirBnB from Scratch</p>
                <p className='font-bold text-red-600 text-sm lg:text-2xl'>Loads of animations & color</p>
                <p className='font-bold text-red-600 text-sm lg:text-2xl'>schemes from TailWind CSS</p>
                <p className='font-semibold text-gray-700 text-sm lg:text-lg'>Created on VS code using Next.js and Node.js framework</p>
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner