import { useEffect, useState } from "react";

const Hero = () => {

    const [value, setValue] = useState<string>(["THERE", "IN LONDON", "IN SYDNEY", "IN TOKYO", "IN HONG KONG", "IN NEW YORK", "IN ZURICH", "IN PARIS", "IN ROME", "IN SHANGHAI"][Math.floor(Math.random() * 10)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(["THERE", "IN LONDON", "IN SYDNET", "IN TOKYO", "IN HONG KONG", "IN NEW YORK", "IN ZURICH", "IN PARIS", "IN ROME", "IN SHANGHAI"][Math.floor(Math.random() * 10)]);
        }, 1500);

        return () => clearInterval(interval);
    });

    return (
        <div className="pl-9 relative flex items-center h-[84vh] ">
            <h1 className="text-7xl text-white bold">WHAT <br /> TIME <br /> IS IT <br />{value}?</h1>
        </div>
    )
}

export default Hero;