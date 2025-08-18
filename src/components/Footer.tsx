import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaLinkedinIn, FaWeibo } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="flex flex-col h-[45vh] mt-2">
            <hr />
            <div className="flex justify-around items-start h-[35vh] p-5">
                <div className="flex flex-col gap-5 font-bold text-xl">
                    <p>Watches</p>
                    <p>Suggestions</p>
                </div>
                <div className="text-sm">
                    <ul className="flex flex-col gap-5">
                        <li>MASTER</li>
                        <li>CONQUEST</li>
                        <li>SPIRIT</li>
                        <li>ELEGANCE</li>
                        <li>HERITAGE</li>
                    </ul>
                </div>
                <div className="text-sm">
                    <ul className="flex flex-col gap-5">
                        <li>Store Locator</li>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="text-sm">
                    <ul className="flex flex-col gap-5">
                        <li>Legal Terms</li>
                        <li>Careers</li>
                        <li>Media Center</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <p>Subscribe to our newsletter*</p>
                    <div className="flex">
                        <input
                            type="text" placeholder="example@gmail.com"
                            className="border-l border-t border-b p-3"
                        />
                        <button className="cursor-pointer border-r border-t border-b p-3">Go</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-around items-center h-[10vh]">
                <p className="text-[12px]">© 2025 LONGINES Watch Co. Francillon Ltd., All rights reserved</p>
                <p className="text-sm">Accessibility settings</p>
                <p className="text-sm">Cookies settings</p>
                <div className='flex gap-1 text-gray-500'>
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