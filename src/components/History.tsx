import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Histroy = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
        <div data-aos='fade-up' className='flex flex-col justify-center items-center text-center p-9'>
            <div className="flex ">
                <h1 className="text-6xl bold font-serif">LONGINES SPIRIT <br />ZULU TIME 1925</h1>
            </div>
            <div className="flex pt-10 pb-4 w-150">
                <p className="text-sm">
                    “For me, the LONGINES Spirit Zulu Time represents not only precision time keeping, but also connection. In today’s lifestyle, our loved ones and colleagues can often be a world away. However, the LONGINES Spirit Zulu Time gives me, at a glance, that immediate connection with them, and it does so with the elegance that LONGINES excels at.” 
                </p>
            </div>
            <p className="text-sm font-serif"><b>Henry Cavill</b></p>
        </div>
    )
}
export default Histroy;