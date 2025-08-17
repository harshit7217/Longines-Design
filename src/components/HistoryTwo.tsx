
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HistroyTwo = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div data-aos='fade-up' className='flex flex-col justify-center items-center text-center p-9'>
            <div className="flex ">
                <h1 className="text-3xl bold font-serif">A CENTURY IN THE MAKING</h1>
            </div>
            <div className="flex pt-10 pb-4 w-150">
                <p className="text-sm">
                    Get ready for takeoff, with the LONGINES ZULU TIME 1925: a true GMT watch commemorating the 100th anniversary of the first LONGINES dual time wristwatch. Like our Ambassador of Elegance, Henry Cavill, stay connected even when you're a world away.
                </p>
            </div>
        </div>
    )
}

export default HistroyTwo;