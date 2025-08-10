import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { VscAccount } from 'react-icons/vsc'

const Header = () => {
    return (
        <div className='m-0 p-0 hover:bg-white'>
            <img src="../public/hero-section-bg.jpg" alt="Hero Section Background" className='absolute w-full h-[100vh]' />
            <div className='relative hover:bg-white'>
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
                        <li className='text-xl text-dark-blue flex items-center'>HEEITAGE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;