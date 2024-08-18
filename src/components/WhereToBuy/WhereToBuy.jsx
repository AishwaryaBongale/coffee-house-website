import React, { useState } from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("formData:", formData);
    formData.append("access_key", "761010eb-aa48-4a1e-844a-607135c4a76b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setShowSuccess(true);
      event.target.reset();
    }
  };

  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <form className="space-y-8" onSubmit={onSubmit}>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Stay Ahead of the world
          </motion.h1>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              id="success-message"
              class="bg-green-50 border border-green-300 text-green-700 rounded-md p-2 mb-4 text-sm"
            >
              <p>Subscription successful!</p>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className=" flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
              name="email"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className=" flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full "
              name="country"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
              name="zipcode"
            />
          </motion.div>

          <button className="primary-btn w-full" type="submit">
            Subscribe
          </button>
        </form>
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt="World Map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
