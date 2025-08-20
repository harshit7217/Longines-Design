
const Showing = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="p-20">
                <video 
                    src="../secion.webm"
                    autoPlay
                    loop
                    muted
                    className="w-[980px]"
                ></video>
            </div>
            <div className="flex flex-col justify-center w-[240px] items-center ml-10 mr-10">
                <img
                    src='../first_watch.webp'
                    alt="Watch"
                    className="w-[767px]"
                />
                <p className="text-blue-300 font-bold border-none">New</p>
                <p className="text-center text-sm">LONGINES SPRIT ZULU TIME 1925</p>
                <p className="text-center text-gray-500 text-sm">Ø 39.00 mm - Automatic watch Stainless steel and 18 karat pink gold cap 200</p>
                <p className="p-2">$412,000.00</p>
                <button className="border-2 p-1 border-gray-500 text-sm text-black-500 font-bold hidden">Find a retailer</button>
            </div>
        </div>
    )
}

export default Showing;