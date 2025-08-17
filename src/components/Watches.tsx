import { Watches as watchesData } from "./data/NewWatchesData.ts"
// Update the import to match the actual export from DiscoverWatchesData.ts
import { discoverWatches as disWatchData } from "./data/DiscoverWatchesData.ts"
import { useState } from "react";

type Watch = {
    image: string;
    type: string;
    title: string;
    description: string;
    price: string;
};

const Watches = () => {
    const [check, setCheck] = useState<boolean>(true);

    const handleNew = () => {
        setCheck(() => true);
    };

    const handleDiscover = () => {
        setCheck(() => false);
    };

    return (
        <div className="p-1 m-1">
            <div className="flex justify-center gap-7 font-serif">
                <button onClick={handleNew}>NEW</button>
                <button onClick={handleDiscover}>DISCOVER MORE</button>
            </div>
            <div className="flex justify-center items-center flex-wrap p-5">

                {check ? (
                    watchesData.map((watch: Watch) => (
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
                    ))
                ) : (
                    disWatchData.map((watch: Watch) => (
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
                    ))
                )}


            </div>
        </div>
    )
}

export default Watches;