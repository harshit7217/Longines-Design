
import { discoverMore as disWatchData } from "./data/DiscoverMoreData.ts"
import 'aos/dist/aos.css';

type Watch = {
    image: string;
    type: string;
    title: string;
    description: string;
    price: string;
};

const DiscoverMore = () => {
    

    return (
        <div data-aos='fade-up' className="mt-20 ml-20 mr-20">
            <div className="text-xl mb-4 font-bold font-serif">
                <button>DISCOVER MORE</button>
            </div>
            <hr className="text-gray-300"/>
            <div className="flex justify-center items-center flex-wrap p-5">

                { disWatchData.map((watch: Watch) => (
                        <div className="flex flex-col justify-center w-[240px] items-center ml-10 mr-10" key={watch.title}>
                            <img
                                src={watch.image}
                                alt="Watch"
                                className="w-[767px]"
                            />
                            <p className="text-blue-300 font-bold">{watch.type}</p>
                            <p className="text-center text-sm">{watch.title}</p>
                            <p className="text-center text-gray-500 text-sm">{watch.description}</p>
                            <p className="p-2">{watch.price}</p>
                            <button className="border-2 p-1 border-gray-500 text-sm text-black-500 font-bold hidden">Find a retailer</button>
                        </div>

                ))}

            </div>
        </div>
    )
}

export default DiscoverMore;