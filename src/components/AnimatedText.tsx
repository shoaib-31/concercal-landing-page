"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <div className="flex flex-col sm:flex-row text-white my-4">
      <motion.div
        className="text-7xl lg:text-8xl font-bold flex items-end bg-gradient-to-b to-blue-500 from-red-700 text-transparent bg-clip-text"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "-3rem", opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "tween" }}
      >
        B
        <motion.span
          className="text-3xl lg:text-5xl my-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, type: "tween" }}
        >
          eats
        </motion.span>
      </motion.div>
      <AnimatePresence>
        <motion.div
          className="text-7xl lg:text-8xl font-bold flex items-end bg-gradient-to-b to-blue-500 from-red-700 text-transparent bg-clip-text"
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          B
          <motion.span
            className="text-3xl lg:text-5xl my-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1, type: "tween" }}
          >
            eyond
          </motion.span>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="text-7xl lg:text-8xl font-bold flex items-end bg-gradient-to-b to-blue-500 from-red-700 text-transparent bg-clip-text"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "3rem", opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "tween" }}
      >
        B
        <motion.span
          className="text-3xl lg:text-5xl my-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, type: "tween" }}
        >
          ounds
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
