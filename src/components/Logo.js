import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      {/* <MotionLink href="/"
      className=" w-16 h-12 bg-dark rounded-lg text-light flex items-center justify-center text-3xl font- border border-solid border-transparent dark:border-light"

      whileHover={{ 
        backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
       }}
       
      > AS </MotionLink> */}
    </div>
  );
}

export default Logo;