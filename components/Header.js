import Image from "next/image";
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon
 } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* left */}
            <div className='flex relative items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    // src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-500x181.png'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                    className='active:scale-90 transition duration-150'
                    
                />
            </div>
        {/* middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
                <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your search'/>
                <SearchIcon className='md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 shadow-md hover:shadow-lg active:scale-90 transition duration-150'/>
            </div>
        {/* right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer active:scale-90 transition duration-150'>Become a Host</p>
                <GlobeAltIcon className=' rounded-full h-6 cursor-pointer hover:shadow-lg active:scale-90 transition duration-150' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full' >
                    <MenuIcon className='rounded-full h-6 hover:shadow-lg active:scale-90 transition duration-150' />
                    <UserCircleIcon className='rounded-full h-6 hover:shadow-lg active:scale-90 transition duration-150' />
                </div>
            </div>
        </header>
    )
}

export default Header
