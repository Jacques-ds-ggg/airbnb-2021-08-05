import Header from "../components/Header";
import Footer from '../components/Footer';
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
    const router = useRouter();

    // console.log(searchResults);

    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

            <main classname='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs ml-5'>300+ stays - {range} - for {noOfGuests} Guests</p>
                    <h1 className='font-semibold text-3xl mt-2 mb-6 ml-5'>Stays in {location}</h1>
                    <div className='font-bold text-red-400 hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(item => (
                            <InfoCard 
                                img={item.img}    
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>

            </main>

            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}