"use client";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Navbar from "../components/Navbar";
import LoginButton from "../components/LoginButton";
import Grid from "../components/Grid";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/SpotLight";

export default function Home() {
  return (
    <main className=" flex-col w-screen overflow-x-hidden bg-fixed  bg-black  bg-dot-white/[0.2] relative flex items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-80"
        fill="white"
      />
      <Navbar />
      <AnimatePresence>
        <motion.div
          className=" w-full flex justify-between items-center h-[90vh] px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" flex flex-col w-full gap-4 justify-center items-center">
            <AnimatedText />
            <div className=" text-2xl w-3/5 text-white/60  text-center">
              Experience the pulse of live music with ease. Discover and track
              your favorite artists&apos; upcoming events effortlessly with our
              intuitive platform.
            </div>
            <LoginButton />
            <img
              src="/Arrow.gif"
              alt="arrow"
              className=" transform translate-x-10"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className=" w-full text-[9rem] 2xl:text-[10rem] font-medium text-white/5 text-center">
        Sync Your Beats
      </div>
      <Grid />
      <div className=" w-full text-center text-xl font-medium mb-10">
        Live.Love.Listen.
      </div>
      <Footer />
    </main>
  );
}
