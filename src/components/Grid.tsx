import clsx from "clsx";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { oswald } from "@/utils/fonts";
import { MoveRight } from "lucide-react";
import { cn } from "@/utils/cn";
const Grid = () => {
  return (
    <div className=" w-full flex items-center justify-center  mt-10">
      <div className=" p-4 sm:p-0 grid place-items-center grid-cols-1 sm:grid-cols-[25rem] lg:grid-cols-[20rem_20rem_20rem] 2xl:grid-cols-[25rem_25rem_25rem] grid-rows-4 gap-8 lg:gap-4 2xl:gap-8">
        <Box className=" lg:col-span-2">
          <div className=" h-1/2 bg-[#1ED760] flex-1 flex justify-center items-center">
            <Image
              src={"/Spotify_Black.png"}
              height={200}
              width={400}
              alt="Spotify"
              className=" w-[300px] lg:w-[400px]"
            />
          </div>
          <div className=" p-4 flex flex-col gap-3">
            <h1 className=" text-lg sm:text-3xl gap-4 flex items-center">
              Connect Your Spotify
              <span>
                <MoveRight size={40} />
              </span>
            </h1>
            <div className=" text-sm sm:text-base text-white/50">
              With ConcertCal, your favorite artists are just a beat away. Sync
              your Spotify, discover top artists, and never miss a live show
              again. Experience the thrill of live music, tailored just for you.
              Let ConcertCal be your concert guide.
            </div>
          </div>
        </Box>
        <Box>
          <div className=" h-1/2 bg-[#db4a39] flex-1 flex justify-center items-center">
            <Image
              src={"/google-plus.png"}
              height={200}
              width={200}
              alt="Spotify"
              className=" w-[100px] 2xl:w-[200px] aspect-square"
            />
          </div>
          <div className=" p-4 flex flex-col gap-3">
            <h1 className=" text-lg sm:text-3xl gap-4 flex items-center">
              Connect Your Google+
              <span>
                <MoveRight size={40} />
              </span>
            </h1>
            <div className=" text-sm sm:text-base text-white/50">
              ConcertCal seamlessly integrates with Google Calendar, ensuring
              you never miss a show. Mark dates, set reminders, and sync
              effortlessly. Plan your musical journey with ease and enjoy live
              performances without the worry of missing out.
            </div>
          </div>
        </Box>

        <Box>
          <div className=" h-1/2 bg-[#4d51d3] flex-1 flex justify-center items-center">
            <Image
              src={"/concert.png"}
              height={100}
              width={100}
              alt="Spotify"
            />
          </div>
          <div className=" p-4 flex flex-col gap-3">
            <h1 className=" text-lg sm:text-3xl gap-4 flex items-center">
              We&apos;ll fetch your favourite artists
              <span>
                <MoveRight size={40} />
              </span>
            </h1>
            <div className=" text-sm sm:text-base text-white/50">
              Next, let ConcertCal fetch your top artists and their upcoming
              events. Stay in the loop with personalized concert alerts, so
              you’re always the first to know when your favorite artists are
              performing live.
            </div>
          </div>
        </Box>
        <Box className=" lg:col-span-2 w-full">
          <div className=" h-1/2 bg-[#ffe44b] flex-1 flex justify-center items-center">
            <Image src={"/ticket.svg"} height={150} width={150} alt="Spotify" />
          </div>
          <div className=" p-4 flex flex-col gap-3">
            <h1 className=" text-lg sm:text-3xl gap-4 flex items-center">
              Score the Best Deals
              <span>
                <MoveRight size={40} />
              </span>
            </h1>
            <div className=" text-sm sm:text-base text-white/50">
              Finally, ConcertCal searches among various ticket sellers to find
              the best prices for you. Enjoy the thrill of live music without
              breaking the bank, with the best deals on tickets for your
              favorite artists&apos; events.
            </div>
          </div>
        </Box>
        <Box className=" min-h-0 lg:col-span-3 overflow-hidden row-span-2 h-fit w-full">
          <video
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
          />
        </Box>
      </div>
    </div>
  );
};

const Box = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: String;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        " overflow-hidden flex flex-col w-full min-h-[25rem] border-2 border-white/10 shadow-white/10 bg-transparent rounded-2xl shadow-xl " +
          className,
        oswald.className
      )}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.02)" }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, y: 100, x: 100 },
      }}
      transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default Grid;
