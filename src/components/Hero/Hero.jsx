import React from "react";
import BgImage from "../../assets/banner-image.jpeg";
// import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Embrace the Boldness
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl">Warmth in Every Sip</h3>
                  <p className="text-sm opacity-55 leading-loose">
                    At Caffeine Cuddles, we turn coffee into a comforting
                    ritual. Our story is about crafting the perfect cup that
                    feels like a warm embrace. Each blend is designed to bring
                    joy and comfort to your day. From the first sip to the last
                    drop, our black coffee is designed to offer a moment of
                    indulgence in your busy day.
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              {/** Copyright   <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-[200px] z-[1]"
              ></motion.div>
              */}
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
              >
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  Blvck Tumbler
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl">Crafted for Comfort</h3>
                    <p className="text-sm opacity-55 leading-loose">
                      Explore our curated coffee blends, each one a testament to
                      quality and comfort. From bold mornings to soothing
                      evenings, find your perfect cup with Caffeine Cuddles.
                    </p>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                </div>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>

        {sidebar && (
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50"
          >
            <div className="w-full h-full flex justify-center items-center ">
              <div className=" flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <a
                  href="https://www.facebook.com/CaffeinCuddles"
                  target="_blank"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="https://www.twitter.com/CaffeinCuddles"
                  target="_blank"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/CaffeinCuddles"
                  target="_blank"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaInstagram className="text-2xl" />
                </a>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
