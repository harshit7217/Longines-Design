import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaLinkedinIn, FaWeibo } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="flex flex-col h-auto w-[100vw] mt-2">
            <hr />
            <div className="flex flex-wrap justify-around items-start p-5">
                <div className="flex flex-col gap-5 font-bold text-xl">
                    <p>Watches</p>
                    <p>Suggestions</p>
                </div>
                <div className="text-sm mb-10">
                    <ul className="flex flex-col gap-5">
                        <li>MASTER</li>
                        <li>CONQUEST</li>
                        <li>SPIRIT</li>
                        <li>ELEGANCE</li>
                        <li>HERITAGE</li>
                    </ul>
                </div>
                <div className="text-sm mb-10">
                    <ul className="flex flex-col gap-5">
                        <li>Store Locator</li>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="text-sm mb-10">
                    <ul className="flex flex-col gap-5">
                        <li>Legal Terms</li>
                        <li>Careers</li>
                        <li>Media Center</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 mb-10">
                    <p>Subscribe to our newsletter*</p>
                    <div className="flex flex-wrap">
                        <input
                            type="text" placeholder="example@gmail.com"
                            className="border-l border-t border-b p-3 "
                        />
                        <button className="cursor-pointer border-r border-t border-b p-3">Go</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-wrap justify-around items-center m-5">
                <p className="text-[12px] p-2">© 2025 LONGINES Watch Co. Francillon Ltd., All rights reserved</p>
                <p className="text-sm p-2">Accessibility settings</p>
                <p className="text-sm p-2">Cookies settings</p>
                <div className='flex flex-wrap gap-1 text-gray-500 p-2'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaYoutube />
                    <FaTwitter />
                    <FaPinterest />
                    <FaWeibo />
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    )
}

export default Footer;