
const Banner = () => {
    return (
        <div className="mt-20 h-[60vh]">
            <div className="h-[60vh] absolute">
                <img
                    src="../banner.avif"
                    alt="banner image"
                    className="h-[60vh]"
                />
            </div>
            <div className="relative flex flex-col justify-end items-center w-[50%] h-[50vh]">
                <div>
                    <p className="text-white text-3xl font-bold font-serif">LONGINES SPIRIT ZULU TIME</p>
                    <p><a href="" className="text-white text-2xl font-serif">Discover the collection</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banner;