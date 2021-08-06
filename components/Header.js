import Image from "next/image";
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon
 } from '@heroicons/react/solid'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white bg-opacity-20 shadow-md p-5 md:px-10'>
        {/* left */}
            <div onClick={() => router.push("/")}
                className='flex relative items-center h-10 cursor-pointer my-auto'>
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
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                    type='text'
                    placeholder={placeholder || 'Start your search'}
                />
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
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5'/>
                        <input
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type='number'
                            min={1}
                            classname='w-12 pl-2 text-lg outline-none text-red-400'/>
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
