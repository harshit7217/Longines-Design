import { useEffect, useState } from "react";

const Banner = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {width > 700 ?
                <div className="mt-20 h-[60vh]">
                    <div className="absolute">

                        <img
                            src="../banner.avif"
                            alt="banner image"
                            className="h-[60vh]"
                        />
                    </div>
                    <div className="relative flex flex-col justify-end items-center w-[50%] h-[50vh]">
                        <div>
                            <p className="text-white text-3xl font-bold font-serif">LONGINES SPIRIT ZULU TIME</p>
                            <p><a href="" className="text-white text-2xl font-serif">Discover the collection</a></p>
                        </div>
                    </div>
                </div> :
                <div className="mt-20 h-[20vh]">
                    <div className="absolute">

                        <img
                            src="../banner.avif"
                            alt="banner image"
                            className="h-[20vh]"
                        />
                    </div>
                    <div className="relative flex flex-col justify-end items-center w-[70%] pl-5 h-[20vh]">
                        <div>
                            <p className="text-white text-2xl font-bold font-serif">LONGINES SPIRIT ZULU TIME</p>
                            <p><a href="" className="text-white text-xl font-serif">Discover the collection</a></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Banner;