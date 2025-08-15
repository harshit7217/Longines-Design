import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

const Video = () => {

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1],[-795,1700]);
    const X = useTransform(scrollYProgress, [0, 1],[795, -1700]);
    

    return (
        <div className="flex h-[100vh] overflow-x-hidden" ref={scrollRef} >
            <motion.div
                // initial={{ opacity:0, x:0 }}
                // whileInView={{ opacity:1 }}
                // viewport={{ root:scrollRef }}
                style={{ x
                 }}
                className="w-[50%] flex items-center justify-center">
                <video
                    src="../public/first_video.webm"
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
                style={{ x:X
                 }}
                className="w-[50%] flex items-center justify-center"
            >
                <video
                    src="../public/second_video.webm"
                    autoPlay
                    loop
                    muted
                    className="w-full h-150 object-cover p-9"
                ></video>
            </motion.div>
        </div>
    )
}

export default Video;