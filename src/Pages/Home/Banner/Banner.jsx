import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [showText, setShowText] = useState(false);
  const [marquee, setMarquee] = useState(false);
  const [scaleImages, setScaleImages] = useState(true); // State for image scaling

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 2000); // Delay for the text to appear after 2 seconds

    const timer2 = setTimeout(() => {
      setMarquee(true);
    }, 4000); // Start marquee after text is shown

    const timer3 = setTimeout(() => {
      setScaleImages(false); // Reset scaling after images have appeared
    }, 3000); // Scale images for 3 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col  overflow-hidden px-4 pt-24 pb-12 md:px-12 md:pt-36 md:pb-16"
      style={{
        backgroundImage: 
          "radial-gradient(circle farthest-corner at 7.5% 54.1%, rgba(0,0,0,1) 0%, rgba(39,0,89,1) 74.9%)",
      }}
    >
      <div className="flex flex-col justify-center items-center text-left text-white font-maven h-full z-10">
   
        <motion.h1
          className="lg:text-6xl text-4xl md:text-5xl font-semibold flex flex-col md:flex-row justify-between max-w-7xl"
          initial={{ opacity: 0 }}
          animate={showText ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Travel memories you&apos;ll <br /> never forget
          <p className="text-sm md:text-base font-normal lg:w-[30%]">Travel is a profound journey that goes beyond mere sightseeing; it&apos;s an exploration of diverse cultures, breathtaking landscapes, and rich histories that awaken the senses and broaden the mind.</p>
        </motion.h1>
   
        <motion.div
          className="lg:text-6xl text-yellow-400 my-4 whitespace-nowrap overflow-hidden text-xl md:text-2xl"
          initial={{ x: '130%' }}
          animate={marquee ? { x: '-100%' } : {}}
          transition={{ type: "tween", duration: 10, ease: "linear", repeat: Infinity }}
        >
          Dive into Bangladesh&apos;s natural beauty
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-full w-full md:w-[80%] mx-auto mt-12">
        {/* First column */}
        <div className="flex flex-col gap-2">
          <motion.div
            className="h-48 md:h-full bg-no-repeat bg-center bg-cover border-4 border-white"
            style={{ backgroundImage: `url('/assets/home/img1.jpg')` }}
            initial={{ scale: 1.5 }} // Start with images scaled up
            animate={scaleImages ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="h-48 md:h-full bg-no-repeat bg-center bg-cover border-4 border-white"
            style={{ backgroundImage: `url('/assets/home/img2.jpg')` }}
            initial={{ scale: 1.5 }}
            animate={scaleImages ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Second column */}
        <div className="flex flex-col gap-2">
          <motion.div
            className="h-48 md:h-full bg-no-repeat bg-center bg-cover border-4 border-white"
            style={{ backgroundImage: `url('/assets/home/img3.jpg')` }}
            initial={{ scale: 1.5 }}
            animate={scaleImages ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="h-48 md:h-full bg-no-repeat bg-center bg-cover border-4 border-white"
            style={{ backgroundImage: `url('/assets/home/img4.jpg')` }}
            initial={{ scale: 1.5 }}
            animate={scaleImages ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Third column */}
        <div className="col-span-2 flex flex-col gap-2">
          <motion.div
            className="h-48 md:h-full bg-no-repeat bg-center bg-cover border-4 border-white"
            style={{ backgroundImage: `url('/assets/home/img5.jpg')` }}
            initial={{ scale: 1 }}
            animate={scaleImages ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
