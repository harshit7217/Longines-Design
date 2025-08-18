import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos='fade-up' className='flex flex-wrap justify-center items-center mt-20 ml-9 mr-9'>
            <div className='w-[45%] flex justify-center items-center'>
                <div className='w-125'>
                    <p className='text-xl font-bold mb-2'>TRAVEL WITH ELEGANCE</p>
                    <p className='text-sm font-serif mb-4'>With the LONGINES SPIRIT ZULU TIME 1925, you always make the connection. Swap the stainless steel bracelet for a black NATO strap: for style that travels well, wherever you go.</p>
                    <button className='border-2 p-3 bg-dark-blue border-dark-blue text-white hover:text-blue-900 hover:font-bold hover:bg-white'>Shop the watch</button>
                </div>
            </div>
            <div className='w-[35%]'>
                <img src="../shop.avif" alt="watch images" />
            </div>
        </div>
    )
}

export default Shop;