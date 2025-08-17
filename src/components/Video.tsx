import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const Video = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [-795, 1700]);
    const X = useTransform(scrollYProgress, [0, 1], [795, -1700]);

    const rawX = useSpring(x, {
        stiffness: 200,
        damping: 30
    })

    const rawX2 = useSpring(X, {
        stiffness: 200,
        damping: 30
    })

    const [prevScroll, setPrevScroll] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [isFrozen, setIsFrozen] = useState(false);
    const [isDimmed, setIsDimmed] = useState(false);

    const frozenX = useMotionValue(0);
    const frozenX2 = useMotionValue(0);

useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (latest) => {
    setScrollDirection(latest > prevScroll ? 'down' : 'up');
    setPrevScroll(latest);
    console.log(rawX2.get());

    // Freeze when videos touch
    if (!isFrozen && scrollDirection === 'down' && scrollYProgress.get() > 0.33) {
      setIsFrozen(true);
      frozenX.set(100);
      frozenX2.set(-1);
    }
    // Dim if already frozen and still scrolling down
    if (isFrozen && scrollDirection === 'down' ) {
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



    return (
        <div className='h-[200vh]'>
            <div 
                className="flex h-[100vh] overflow-x-hidden scroll-smooth" 
                ref={scrollRef}
            >
                <motion.div
                    // initial={{ opacity:0, x:0 }}
                    // whileInView={{ opacity:1 }}
                    // viewport={{ root:scrollRef }}
                    style={{
                        x: isFrozen ? frozenX : rawX,
                        filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                    }}
                    className="w-[50%] flex items-center justify-center">
                    <video
                        src="../first_video.webm"
                        autoPlay
                        loop
                        muted
                        className="w-full h-150 object-cover p-9"
                    ></video>
                </motion.div>
                <motion.div
                    // initial={{ opacity:0, x:0 }}
                    // whileInView={{ opacity:1 }}
                    // viewport={{ root:scrollRef }}
                    style={{
                        x: isFrozen ? frozenX2 : rawX2,
                        filter: isDimmed ? 'brightness(15%)' : 'brightness(100%)'
                    }}
                    className="w-[50%] flex items-center justify-center"
                >
                    <video
                        src="../second_video.webm"
                        autoPlay
                        loop
                        muted
                        className="w-full h-150 object-cover p-9"
                    ></video>
                </motion.div>
            </div>
        </div>
    )
}

export default Video;