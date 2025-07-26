import React from 'react';

const Ingredients = () => {
    const ingredients = [
        {
            img: "https://drinkjuni.com/cdn/shop/files/Group_50x.svg?v=1727280675",
            title: "green tea or hibiscus",
            subtitle: "Brain Health & Metabolism",
            desc: `GREEN TEA\nFlavors: Lemon, Peach, Tropical, Raspberry\n\nDECAFFEINATED GREEN TEA\nFlavors: Yuzu Pineapple, Cherry Lime\nStudies have suggested that green tea may have positive effects on brain health, weight loss and more.\n\nHIBISCUS:\nFlavors: Strawberry Hibiscus\nHibiscus is rich in antioxidants and is commonly used to help lower cholesterol.`,
        },
        {
            img: "https://drinkjuni.com/cdn/shop/files/Group_4_50x.svg?v=1727282089",
            title: "lion's mane",
            subtitle: "Stress & Anxiety",
            desc: "An adaptogenic mushroom that has been used for centuries in functional medicine. Lion’s Mane may help increase cognitive function and to combat stress.",
        },
        {
            img: "https://drinkjuni.com/cdn/shop/files/Group_1_50x.svg?v=1727281195",
            title: "reishi mushroom",
            subtitle: "Fights Fatigue",
            desc: "An adaptogenic mushroom that may help combat daily fatigue and increase antioxidant support in the body.",
        },
        {
            img: "https://drinkjuni.com/cdn/shop/files/Group_2_50x.svg?v=1727281256",
            title: "acerola cherry",
            subtitle: "Vitamin C & Antioxidants",
            desc: "An adaptogenic superfood known for its incredible Vitamin C and antioxidant properties.",
        },
        {
            img: "https://drinkjuni.com/cdn/shop/files/Group_3_50x.svg?v=1727281315",
            title: "ashwagandha",
            subtitle: "Mood & Energy",
            desc: "An ancient root used in Ayurvedic medicine believed to help reduce stress, support energy, and improve overall mood and endurance.",
        },
    ];

    return (
        <div className="bg-[#EBEBBF]">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-[500px] h-auto rounded-3xl shadow-lg"
                        src="https://m.media-amazon.com/images/I/81XUXxShSCL._SL1500_.jpg"
                        alt="Juni drink"
                    />
                </div>

                <div className="w-full md:w-1/2 text-gray-800 text-center space-y-2">
                    <p className="text-sm font-medium text-gray-500">BACKED BY RESEARCH</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold">Superstar</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ingredients!</p>
                    <p className="text-base sm:text-lg md:text-xl">JUNI’s proprietary “Super 5” Better-for-You Blend is packed with</p>
                    <p className="text-base sm:text-lg md:text-xl">adaptogens and functional ingredients to</p>
                    <p className="text-base sm:text-lg md:text-xl">balance your mind and body.</p>
                </div>
            </div>

            {/* Ingredient List Section */}
            <div className="bg-[#f5dadf]">
                <div className="flex flex-col lg:flex-row gap-10 px-6 py-10">
                    {/* Left - Ingredients List */}
                    <div className="flex-1 space-y-4">
                        <p className="text-xl md:text-2xl uppercase font-semibold">mindfully crafted</p>
                        <p className="text-2xl md:text-3xl font-bold text-gray-800">"super 5" ingredients</p>

                        {ingredients.map((item, index) => (
                            <details
                                key={index}
                                className="p-4 rounded-lg shadow-sm border border-gray-200 bg-white transition-all duration-300"
                            >
                                <summary className="cursor-pointer flex items-center gap-4">
                                    <img src={item.img} alt={item.title} className="w-12 h-12" />
                                    <div>
                                        <p className="text-lg font-semibold capitalize text-gray-800">{item.title}</p>
                                        <p className="text-sm font-medium text-pink-600">{item.subtitle}</p>
                                    </div>
                                </summary>
                                <p className="text-sm mt-3 text-gray-600 pl-16 whitespace-pre-line">{item.desc}</p>
                            </details>
                        ))}
                    </div>

                    {/* Right - GIF Image */}
                    <div className="flex-1 flex justify-center items-start">
                        <img
                            className="w-full max-w-md md:max-w-lg rounded-lg"
                            src="https://drinkjuni.com/cdn/shop/files/Juni_-_Ingredients-1.gif?v=1727807205"
                            alt="Super ingredients visual"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingredients;
