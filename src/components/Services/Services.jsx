import { motion } from "framer-motion";
import React from "react";
import Coffee1 from "../../assets/coffee/coffee-black.png";
import Coffee2 from "../../assets/coffee/mocha.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: Coffee1,
      title: "Black Coffee",
      price: 1.99,
      subtitle:
        "Bold and straightforward, offers a pure, rich flavor with every sip.",
    },
    {
      id: 2,
      image: Coffee2,
      title: "Mocha",
      price: 4.99,
      subtitle:
        "A luscious blend of espresso, velvety milk, and decadent chocolate.",
    },
    {
      id: 1,
      image: Coffee3,
      title: "Cold Coffee",
      price: 3.99,
      subtitle:
        "A smooth, chilled brew that's perfectly balanced and invigorating.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.5,
          }}
          className="text-sm opacity-50"
        >
          Indulge in the unmatched freshness and taste of Caffeine Cuddles
          coffee. Our commitment to quality and flavor ensures that every cup is
          not just a drink, but an experience. Whether you’re starting your day
          or taking a well-deserved break, our coffee is here to elevate your
          moment.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => {
          return (
            <motion.div
              variants={cardVariants}
              className="text-center p-4 space-y-6 content-center"
            >
              <img
                src={service.image}
                alt=""
                className="img-shadow2 max-w-[60%] mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <div className="space-y-2">
                <h1 className="text-2xl">{service.title}</h1>
                <p className="text-darkGray">{service.subtitle}</p>
                <p className="text-darkGray">${service.price}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
