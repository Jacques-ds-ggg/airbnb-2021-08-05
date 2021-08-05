import Image from 'next/image'

function SmallCard({img, location, distance}) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out hover:shadow-lg active:scale-100 transition duration-150'>
            {/* Left */}
            <div className='relative h-6 w-16'>
                <Image src={img} layout='fill' className='rounded-logo'/>
            </div>
            
            {/* right */}
            <div>
                <h2>{location}</h2>
                <h3 classname='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard