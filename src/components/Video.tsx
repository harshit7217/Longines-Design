import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const Video = () => {

    const scrollRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [-830, 1700]);
    const X = useTransform(scrollYProgress, [0, 1], [830, -1700]);

    const mobilex = useTransform(scrollYProgress, [0, 1], [-830, 1700]);
    const mobileX = useTransform(scrollYProgress, [0, 1], [830, -1700]);

    const rawX = useSpring(x, {
        stiffness: 100,
        damping: 20
    })

    const rawX2 = useSpring(X, {
        stiffness: 100,
        damping: 20
    })

    const mobileRawX = useSpring(mobilex, {
        stiffness: 100,
        damping: 20
    })

    const mobileRawX2 = useSpring(mobileX, {
        stiffness: 100,
        damping: 20
    })

    const [prevScroll, setPrevScroll] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [isFrozen, setIsFrozen] = useState(false);
    const [isDimmed, setIsDimmed] = useState(false);

    const frozenX = useMotionValue(0);
    const frozenX2 = useMotionValue(0);

    const mobileFrozenX = useMotionValue(0);
    const mobileFrozenX2 = useMotionValue(0);

    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize])

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrollDirection(latest > prevScroll ? 'down' : 'up');
            setPrevScroll(latest);
            // console.log(rawX2.get());

            // Freeze when videos touch
            if (!isFrozen && scrollDirection === 'down' && scrollYProgress.get() > 0.33) {
                setIsFrozen(true);
                frozenX.set(100);
                frozenX2.set(-100);
                mobileFrozenX.set(0);
                mobileFrozenX2.set(-0);
            }
            // Dim if already frozen and still scrolling down
            if (isFrozen && scrollDirection === 'down') {
                setIsDimmed(true);
            }

            // Unfreeze and restore brightness on scroll up
            if (scrollDirection === 'up' && scrollYProgress.get() < 0.33 && isFrozen) {
                setIsFrozen(false);
                setIsDimmed(false);
            }
        });

        return () => unsubscribe();
    }, [isFrozen, prevScroll]);

    const slowY = useTransform(scrollYProgress, [0, 1], [0, 95]);



    return (
        <>
            {
                windowSize > 1050 ? (
                    <div  className='h-[100vh] '>
                        <div
                            ref={scrollRef}
                            className="absolute flex justify-center items-center w-full h-[100vh] overflow-x-hidden scroll-smooth pl-25 pr-24"
                        >
                            <motion.video
                                style={{
                                    y: slowY,
                                    x: isFrozen ? frozenX : rawX,
                                    filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                                }}
                                src="../first_video.webm"
                                autoPlay
                                loop
                                muted
                                className="w-full h-150 object-cover "
                            ></motion.video>

                            <motion.video
                                style={{
                                    y: slowY,
                                    x: isFrozen ? frozenX2 : rawX2,
                                    filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                                }}
                                src="../second_video.webm"
                                autoPlay
                                loop
                                muted
                                className="w-full h-150 object-cover"
                            ></motion.video>
                        </div>
                        {isFrozen ? (
                            <div className='relative flex justify-center items-center w-full  overflow-x-hidden scroll-smooth pl-25 pr-24 h-[100vh]'>
                                <motion.video
                                    style={{y:slowY}}
                                    src="./main_video.webm"
                                    autoPlay
                                    loop
                                    muted
                                    className='w-full h-150 object-cover'
                                ></motion.video>
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <div className='h-[100vh]'>
                        <div
                            className="absolute flex flex-col justify-center items-center w-[98vw] h-[100vh] overflow-x-hidden scroll-smooth pl-1 pr-1"
                            ref={scrollRef}
                        >
                            <motion.video
                                style={{
                                    x: isFrozen ? mobileFrozenX : mobileRawX,
                                    filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                                }}
                                src="../first_video_mobile.webm"
                                autoPlay
                                loop
                                muted
                                className="w-full h-[50%] pb-0.2 object-cover "
                            ></motion.video>

                            <motion.video
                                style={{
                                    x: isFrozen ? mobileFrozenX2 : mobileRawX2,
                                    filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                                }}
                                src="../second_video_mobile.webm"
                                autoPlay
                                loop
                                muted
                                className="w-full h-[50%] object-cover"
                            ></motion.video>
                        </div>
                        {isFrozen ? (
                            <div className='relative flex justify-center items-center w-full  overflow-x-hidden scroll-smooth pl-1 pr-1 h-full'>
                                <video
                                    src="./main_mobile_video.webm"
                                    autoPlay
                                    loop
                                    muted
                                    className='w-full h-[100vh] object-cover'
                                ></video>
                            </div>
                        ) : null}
                    </div>
                )
            }
        </>
    )
}

export default Video;