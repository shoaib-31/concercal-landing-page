"use client";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Navbar from "../components/Navbar";
import Image from "next/image";
import LoginButton from "../components/LoginButton";
import Grid from "../components/Grid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex bg-gradient-to-tr from-black/95 to-slate-800/90 min-h-screen flex-col w-screen overflow-x-hidden items-center">
      <Navbar />
      <AnimatePresence>
        <motion.div
          className=" w-full flex justify-between items-center mt-10 h-[80vh] px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" flex flex-col w-[50vw] gap-4 justify-center items-center">
            <AnimatedText />
            <div className=" text-2xl text-white/60  text-center">
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
          <Image
            src="/landing.svg"
            alt="landing"
            width={850}
            height={850}
            className=" w-[50vw]"
          />
        </motion.div>
      </AnimatePresence>
      <div className=" w-full text-[9rem] 2xl:text-[10rem] font-medium text-white/5 text-center">
        Sync Your Beats
      </div>
      <Grid />
      <div className=" w-full text-center font-medium mb-10">
        Live.Love.Listen.
      </div>
      <Footer />
    </main>
  );
}
