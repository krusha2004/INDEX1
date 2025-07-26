import { useState, useEffect } from "react";
import "../styles.css";

function Banner() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mobileImage =     
        "https://drinkjuni.com/cdn/shop/files/Juni-Sparkling-Adaptogen-Tea-Jay-Shetty-Radhi-Shetty.jpg?v=1725547261&width=1500";
      const desktopImage =
        "https://drinkjuni.com/cdn/shop/files/Juni_-_Desktop_-_Landing_Page_3_12814513-5949-4483-9743-481f4289ccfe.png?v=1728050574&width=3840";

      setBgImage(window.innerWidth < 768 ? mobileImage : desktopImage);
    };  

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section
        className="banner-section"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="banner-content ">
          <p className="text-4xl lg:text-7xl font-bold text-[#192853] mt-[40px] mb-[15px] ml-[60px]">Sparkling Adaptogenic</p>
          <p className="text-4xl lg:text-7xl font-bold text-[#192853] mb-[15px] ml-[60px]">Drink for a happy</p>
          <p className="text-4xl lg:text-7xl font-bold text-[#192853] ml-[60px]">mind!</p>
          <p className="subtitle ml-[60px]">
            Ashwagandha. Lion's Mane. Reishi Mushroom
          </p>
          <a href="/product" className="shop-button ml-[60px]">
            Shop Now
          </a>
        </div>
      </section>

      {/* Scroll Section */}
      <section className="scroll-section">
        <div
          className="scroll-bg"
          style={{ transform: `translateY(${scrollOffset}px)` }}
        ></div>

        <div className="scroll-images">
          {[
            "juni3",
            "juni4",
            "juni5",
            "juni1",
            "juni2",
            "juni3",
            "juni4",
            "juni5",
            "juni1",
            "juni2",
          ].map((img, index) => (
            <img
              key={index}
              className="can-img"
              src={`https://drinkjuni.com/cdn/shop/files/${img}_400x.png?v=1728016103`}
              alt={`juni-${index}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Banner;
// import React, { useState, useEffect } from 'react';

// const Banner = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const slides = [
//     'https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=823',
//     'https://drinkjuni.com/cdn/shop/files/Juni-CherryLime_1.png?v=1744221028&width=823',
//     'https://drinkjuni.com/cdn/shop/files/Juni_Lemon_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=823',
//   ];

//   // Automatic slide change every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop through the images
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on unmount
//   }, [slides.length]);

//   return (
//     <div>
//       <div className="relative">
//         <div
//           className="transition-all duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(-${slideIndex * 100}%)`,
//             display: 'flex',
//           }}
//         >
//           <div className="bg-[#BFCFBB] w-full flex-shrink-0">
//             <img className="block mx-auto w-[500px]" src={slides[0]} alt="" />
//           </div>
//           <div className="bg-[#FFEEEE] w-full flex-shrink-0">
//             <img className="block mx-auto w-[500px]" src={slides[1]} alt="" />
//           </div>
//           <div className="bg-[#FFF8AF] w-full flex-shrink-0">
//             <img className="block mx-auto w-[500px]" src={slides[2]} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Dots (Navigation) */}
//       <div className="flex justify-center mt-4">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`dot h-3 w-3 mx-2 rounded-full cursor-pointer bg-gray-300 transition-all duration-300 ease-in-out ${
//               slideIndex === index ? 'bg-gray-700' : ''
//             }`}
//             onClick={() => setSlideIndex(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;
