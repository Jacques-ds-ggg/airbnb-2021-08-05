function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800 pt-9'>
                <h5 className='font-bold'>ABOUT</h5>
                <p className='cursor-pointer active:scale-95 transition duration-150'>How AirBnB Works</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>NewsRoom</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Investors</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>AirBnB Plus</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>AirBnB Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Accessibly</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Not the real site AirBnB</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Close enough replica</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Feedback Appreciated</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>I got a Portfolio website</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>FEEDBACK</h5>
                <p className='cursor-pointer active:scale-95 transition duration-150'>LinkedIn profile</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Tell me what you think of this app</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Also Github</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Facebook</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Twitter</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>OTHER SKILLS</h5>
                <p className='cursor-pointer active:scale-95 transition duration-150'>I also do Python</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>AWS Machine Learning</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Cloud native development</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>Azure data Science Specialist</p>
                <p className='cursor-pointer active:scale-95 transition duration-150'>KNIME</p>
            </div>            
        </div>
    )
}

export default Footer
