import { useState } from "react";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const products = [
    {
      name: "Variety Pack",
      img1:
        "https://drinkjuni.com/cdn/shop/files/Juni_Variety_Pack_Adaptogenic_Drink_Jay_Shetty_1.png?v=1726450161&width=823",
      img2:
        "https://drinkjuni.com/cdn/shop/files/Juni_Variety_Pack_Adaptogenic_Drink_Jay_Shetty_2.png?v=1726450161&width=823",
    },
    {
      name: "Peach",
      img1:
        "https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_1.png?v=1726450072&width=823",
      img2:
        "https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_2.png?v=1726425092&width=823",
    },
    {
      name: "Raspberry",
      img1:
        "https://drinkjuni.com/cdn/shop/files/Juni_Raspberry_Adaptogenic_Drink_Jay_Shetty_1_090daf68-839a-4e09-86a4-a8fc083bacff.png?v=1726450337&width=823",
      img2:
        "https://drinkjuni.com/cdn/shop/files/Juni_Raspberry_Adaptogenic_Drink_Jay_Shetty_2.png?v=1726425385&width=823",
    },
    {
      name: "Tropical",
      img1:
        "https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_1.png?v=1726450104&width=823",
      img2:
        "https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_2.png?v=1726425482&width=823",
    },
  ];

  const [quantity, setQuantity] = useState(1);

  const decrease = (e) => {
    e.stopPropagation();
    if (quantity > 1) setQuantity(quantity - 1);
  };


  const increase = (e) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-[#EBEBBF] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-center transition">
            <div className="relative group w-full h-auto">
              <img
                src={product.img1}
                alt={product.name}
                className="w-full transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={product.img2}
                alt={`${product.name} Hover`}
                className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>


            <p className="font-semibold mt-2">{product.name}</p>
            <p className="text-[#192853]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i> (109)
            </p>
            <p className="font-bold">$32.95 USD</p>
            <button className="mt-2 bg-[#35B5AC] text-[#192853] text-[18px] hover:text-white hover:cursor-pointer px-6 py-3 w-[240px] rounded-2xl transition border  border-2	 border-black">
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 mt-[40px] px-4">
        <div>
          <img
            src="https://drinkjuni.com/cdn/shop/files/Untitled_design_-_2025-02-10T220532.357.jpg?v=1739243149&width=1070"
            alt="Promo Mobile"
            className="w-full max-w-[500px]  rounded-2xl shadow-lg block md:hidden"
          />

          <img
            src="https://drinkjuni.com/cdn/shop/files/Untitled_design_-_2025-02-10T220532.357.jpg?v=1739243149&width=1070"
            alt="Promo Desktop"
            className="w-full max-w-[500px] h-[650px] rounded-2xl shadow-lg hidden md:block"
          />
        </div>

        <div className="text-center max-w-xl text-[#192853]">
          <p className="text-[40px] md:text-[50px] font-bold leading-tight">Win tickets to</p>
          <p className="text-[40px] md:text-[50px] font-bold leading-tight">Jay's On Purpose</p>
          <p className="text-[40px] md:text-[50px] font-bold leading-tight mb-4">Live Tour</p>
          <p className="text-lg mb-1">All orders are automatically entered to</p>
          <p className="text-lg mb-4">win. Ends March 31st, 2025.</p>
          <Link to="/product">
            <button className="mt-2 bg-[#192853] text-white px-8 py-4 w-[260px] rounded-xl text-lg hover:cursor-pointer hover:bg-gray-800 transition duration-300">
              Shop now
            </button>
          </Link>

        </div>
      </div>


      <h2 className="mt-[30px] text-center text-[50px] text-[#192853]">RETAILERS</h2>

      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-fast">
          {[
            "https://drinkjuni.com/cdn/shop/files/Sprouts_400x.png?v=1728420209",
            "https://drinkjuni.com/cdn/shop/files/erewhon_400x.png?v=1728420216",
            "https://drinkjuni.com/cdn/shop/files/instacart_400x.png?v=1728420209",
            "https://drinkjuni.com/cdn/shop/files/Target_400x.png?v=1728420177",
            "https://drinkjuni.com/cdn/shop/files/Gelson_s_400x.png?v=1728420204",
          ].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[200px] mx-2">
              <img src={src} alt={`logo-${index}`} className="w-full" />
            </div>
          ))}

          {[
            "https://drinkjuni.com/cdn/shop/files/Sprouts_400x.png?v=1728420209",
            "https://drinkjuni.com/cdn/shop/files/erewhon_400x.png?v=1728420216",
            "https://drinkjuni.com/cdn/shop/files/instacart_400x.png?v=1728420209",
            "https://drinkjuni.com/cdn/shop/files/Target_400x.png?v=1728420177",
            "https://drinkjuni.com/cdn/shop/files/Gelson_s_400x.png?v=1728420204",
          ].map((src, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-[200px] mx-2">
              <img src={src} alt={`logo-duplicate-${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 mt-[40px] px-4">
        <div>
          <img className="w-[500px]" src="https://drinkjuni.com/cdn/shop/files/Juni_Variety_Pack_Adaptogenic_Drink_Jay_Shetty_1.png?v=1726450161&width=823" alt="" />
        </div>
        <div className="text-center">
          <p className="text-[70px] mb-[30px] text-[#192853]">Variety Pack</p>
          <p className="text-[#192853] mb-[20px]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i> (113)
          </p>
          <p className="text-[#192853] mb-[20px] text-[20px]">$29.95 USD</p>
          <p className="text-[#192853] text-start ml-[100px]">Quantity</p>
          <p className="inline-flex items-center space-x-3 px-16 py-4 bg-[#35B5AC] text-[#192853] rounded-xl cursor-pointer select-none">
            <span onClick={decrease} className="px-4  rounded ">-</span>
            <span>{quantity}</span>
            <span onClick={increase} className="px-4 rounded ">+</span>
            <span className="ml-2">Add to cart</span>
          </p>
          <div className="space-y-4 mt-[30px]">
            <button className="w-full bg-[#0096FF] text-white font-semibold px-16 py-4 rounded-xl hover:text-[#192853] transition">
              Buy with Prime
            </button>

            <p className="text-white">FREE Delivery as soon as Tomorrow Apr 8 </p>

            <button className="w-full bg-[#5a31f4] text-white font-semibold px-16 py-4 rounded-xl rounded-md hover:bg-[#4b27e8]   transition">
              Buy with Shop Pay
            </button>


            <button className="w-full text-sm text-gray-700 underline hover:text-black">
              More payment options
            </button>

            <p className="text-sm text-blue-600 hover:underline cursor-pointer">
              View full details
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 relative">
        <img
          className="w-full h-auto"
          src="https://drinkjuni.com/cdn/shop/files/Juni_Mocktail_Adaptogenic_Drink_Jay_Shetty_Recipes.png?v=1726453301&width=3840"
          alt="Mocktail Recipes"
        />
        <div className="absolute top-6 left-4 sm:top-10 sm:left-10 md:top-16 md:left-16 text-[#192853] max-w-[90%] sm:max-w-[60%]">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
            make your own mocktails
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            All the fun without the hangover, try our mocktail recipes for every season!
          </p>
          <button className="bg-[#192853] text-white px-6 sm:px-10 md:px-14 py-2 sm:py-3 rounded-xl cursor-pointer text-sm sm:text-base">
            Get Recipes
          </button>
        </div>
      </div>


    </div>
  );
};

export default ProductCard;
