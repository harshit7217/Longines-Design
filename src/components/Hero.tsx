import { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Hero = () => {

    const [value, setValue] = useState<string>(["THERE", "IN LONDON", "IN SYDNEY", "IN TOKYO", "IN HONG KONG", "IN NEW YORK", "IN ZURICH", "IN PARIS", "IN ROME", "IN SHANGHAI"][Math.floor(Math.random() * 10)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(["THERE", "IN LONDON", "IN SYDNET", "IN TOKYO", "IN HONG KONG", "IN NEW YORK", "IN ZURICH", "IN PARIS", "IN ROME", "IN SHANGHAI"][Math.floor(Math.random() * 10)]);
        }, 1500);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        AOS.init({duration:1000})
    },[])

    return (
        <div data-aos='fade-up' className="pl-9 relative flex items-center h-[95vh] ">
            <h1 className="text-6xl xl:text-7xl text-white bold">WHAT <br /> TIME <br /> IS IT <br />{value}?</h1>
        </div>
    )
}

export default Hero;