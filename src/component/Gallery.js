import React from 'react';
import { motion, scale } from 'framer-motion';

const images = [
  'https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=990',
  'https://drinkjuni.com/cdn/shop/files/Juni_Raspberry_Adaptogenic_Drink_Jay_Shetty_1_090daf68-839a-4e09-86a4-a8fc083bacff.png?v=1744156939&width=990',
  'https://drinkjuni.com/cdn/shop/files/Juni_Lemon_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=1206',
  'https://drinkjuni.com/cdn/shop/files/Juni-StrawberryHibiscus_1.png?v=1731505069&width=823',
  'https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156940&width=823',
  'https://drinkjuni.com/cdn/shop/files/Juni-CherryLime_1.png?v=1744221028&width=823'
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 2.5,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-16 text-[#092953] drop-shadow-lg"
      >
        ✨ Creative Image Gallery ✨
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-2xl"
            variants={imageVariants}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-[280px] h-auto object-cover rounded-2xl"
            />

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
