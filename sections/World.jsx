"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10 md:px-[200px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variant={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-20 right-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-orange-400"
        >
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-pink-400"
        >
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-stone-400"
        >
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute flex justify-center hidden lg:block items-end top-20 right-[250px] w-[150px] h-[110px] p-[6px] rounded-[24px] bg-[#5d6680] shadow-2xl shadow-purple-400"
        >
          <img
            src="/planet-02.png"
            alt="people"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <h3 className="font-semibold text-[14px] mb-2 text-white absolute z-0">
            The Upside Down
          </h3>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute flex hidden lg:block justify-center items-end bottom-20 left-[100px] w-[150px] h-[110px] p-[6px] rounded-[24px] bg-[#5d6680] shadow-2xl shadow-blue-400"
        >
          <img
            src="/planet-01.png"
            alt="people"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <h3 className="font-semibold text-[14px] mb-2 text-white absolute z-0">
            Hogwarts
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
