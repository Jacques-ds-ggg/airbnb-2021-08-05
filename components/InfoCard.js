import { HeartIcon, StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function InfoCard({img, location, title, description, star, price, total}) {
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t active:scale-95 '>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                    
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>{location}</p>
                    <HeartIcon className='cursor-pointer h-2' />
                </div>
                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2'/>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'>
                        <StarIcon className='text-red-400 h-4' />
                        {star}
                    </p>
                    <div>
                        <p className='text-lg font-bold text-red-400 lg:text-2xl'>{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
