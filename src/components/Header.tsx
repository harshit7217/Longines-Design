import { CiSearch, CiLocationOn, CiMenuBurger, CiTimer } from 'react-icons/ci'
import { TbWorld } from 'react-icons/tb'
import { VscAccount } from 'react-icons/vsc'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

interface WindowSize {
    width: number;
    height: number;
}

interface HeaderProps {
    scroll: number;
}

const Header = (props: HeaderProps) => {
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>("down");

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDir = () => {
            const currentScrollDir = window.pageYOffset;
            if (Math.abs(currentScrollDir - lastScrollY) < 5) {
                return;
            }
            setScrollDir(currentScrollDir > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollDir;
        };

        window.addEventListener("scroll", updateScrollDir);

    });

    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize])

    const [menu, setMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setMenu(true);
    }

    const handleMenu2 = () => {
        setMenu(false);
    }

    return (
        <div className='m-0 p-0 hover:bg-white h-[20vh] overflow-hidden'>
            <img
                src="./hero-section-bg.avif" 
                alt="Hero Section Background"
                className="absolute block w-full h-[100vh] object-cover"
                loading="lazy"
            />
            {windowSize.width > 1080 ? (
                scrollDir == "up" || props.scroll < 200 ? (
                    <div className='fixed bg-white w-[100vw] h-30 z-1'>
                        <div className='m-0 pl-9 h-14 flex justify-between items-center '>
                            <div className='m-0'>
                                <ul className='m-0 list-none flex gap-8'>
                                    <li className='text-sm text-dark-blue'>India</li>
                                    <li className='text-sm text-dark-blue'>Customer Service</li>
                                    <li className='text-sm text-dark-blue'>Our universe</li>
                                </ul>
                            </div>
                            <div className='m-0'>
                                <h1 className='text-dark-blue text-3xl underline font-serif'><b><i>LONGINES</i></b></h1>
                            </div>
                            <div className='pr-9'>
                                <ul className='list-none flex gap-8'>
                                    <li className='text-sm text-dark-blue'>Find my LONGINES</li>
                                    <li className='text-sm text-dark-blue flex items-center'>< CiSearch /></li>
                                    <li className='text-sm text-dark-blue flex items-center'>< CiLocationOn /></li>
                                    <li className='text-sm text-dark-blue flex items-center'>< VscAccount /></li>
                                </ul>
                            </div>
                        </div>
                        <div className='p-4 hover:bg-white'>
                            <ul className='flex justify-center gap-8 '>
                                <li className='text-xl text-dark-blue flex items-center'>MASTER</li>
                                <li className='text-xl text-dark-blue flex items-center'>CONQUEST</li>
                                <li className='text-xl text-dark-blue flex items-center'>SPIRIT</li>
                                <li className='text-xl text-dark-blue flex items-center'>ELEGANCE</li>
                                <li className='text-xl text-dark-blue flex items-center'>HERITAGE</li>
                            </ul>
                        </div>
                    </div>
                ) : null) : (
                scrollDir == "up" || props.scroll < 200 || menu ? (
                    <div className='fixed bg-white w-[100vw] h-15 z-1'>
                        <div className='m-0 pl-9 h-14 flex justify-between items-center '>
                            <ul className='list-none flex gap-8'>
                                <li className='text-sm text-dark-blue flex items-center'>< CiSearch /></li>
                                <li className='text-sm text-dark-blue flex items-center'>< CiLocationOn /></li>
                            </ul>
                            <div className='m-0'>
                                <h1 className='text-dark-blue text-3xl underline font-serif'><b><i>LONGINES</i></b></h1>
                            </div>
                            <div className='pr-9'>
                                <ul className='list-none flex gap-8'>
                                    <li className='text-sm text-dark-blue flex items-center'>< VscAccount /></li>
                                    <li className='text-sm text-dark-blue flex items-center'>
                                        {
                                            !menu ? <button
                                                className='cursor-pointer'
                                                onClick={handleMenu}
                                            ><CiMenuBurger /></button> : <button
                                                className='cursor-pointer'
                                                onClick={handleMenu2}
                                            ><IoMdClose /></button>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (null)
            )
            }
            {
                menu ? <div className='fixed flex flex-col gap-5 w-[100vw] justify-around mt-15 bg-white z-1 pl-5 pr-20 text-dark-blue pb-30 overflow-hidden '>
                    <ul className='flex flex-col gap-4 justify-center '>
                        <li className='font-bold'>MASTER</li>
                        <li className='font-bold'>CONQUEST</li>
                        <li className='font-bold'>SPIRIT</li>
                        <li className='font-bold'>ELEGANCE</li>
                        <li className='font-bold'>HERITAGE</li>
                        <li>Men's Watches</li>
                        <li>Women's Watches</li>
                        <li>All Watches</li>
                        <li>Find my LONGINES</li>
                    </ul>
                    <hr />
                    <ul className='flex flex-col gap-2 justify-center '>
                        <li>Customer service</li>
                        <li>Our universe</li>
                    </ul>
                    <hr />
                    <ul className='flex flex-col gap-2 justify-center '>
                        <li className='flex items-center'><VscAccount />My Account</li>
                        <li className='flex items-center'><CiTimer />Watch comparator</li>
                        <li className='flex items-center'><TbWorld />India</li>
                    </ul>
                </div> : null
            }
        </div>
    )
}

export default Header;