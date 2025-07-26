import React, { useState } from 'react';

const Product = () => {
    const [showAvailability, setShowAvailability] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showSort, setShowSort] = useState(false);

    const productList = [
        {
            name: '🍑 Peach',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156940&width=533',
        },
        {
            name: '🍋 Lemon',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni_Lemon_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=533',
        },
        {
            name: '🍓 Raspberry',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni_Raspberry_Adaptogenic_Drink_Jay_Shetty_1_090daf68-839a-4e09-86a4-a8fc083bacff.png?v=1744156939&width=533',
        },
        {
            name: '🍓 Strawberry Hibiscus',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni-StrawberryHibiscus_1.png?v=1731505069&width=533',
        },
        {
            name: '🌴 Tropical',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=533',
        },
        {
            name: '🍒 Cherry Lime',
            price: '$29.95 USD',
            img: 'https://drinkjuni.com/cdn/shop/files/Juni-CherryLime_1.png?v=1744221028&width=533',
        },
    ];

    return (
        <div className="px-4 py-8 bg-[#EBEBBF]">
            {/* Filter + Sort */}
            <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-6 mb-8">
                <div className="space-y-6">
                    <h1 className="text-xl font-bold text-gray-800">Filter:</h1>

                    {/* Availability Filter */}
                    <div>
                        <button
                            onClick={() => setShowAvailability(!showAvailability)}
                            className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-700 hover:text-blue-600"
                        >
                            Availability <span>{showAvailability ? '▲' : '▼'}</span>
                        </button>
                        {showAvailability && (
                            <div className="mt-2 pl-2 space-y-2 text-sm text-gray-600">
                                <p>0 selected</p>
                                <button className="text-blue-500 hover:underline">Reset</button>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>In stock (12)</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Out of stock (1)</span>
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Price Filter */}
                    <div>
                        <button
                            onClick={() => setShowPrice(!showPrice)}
                            className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-700 hover:text-blue-600"
                        >
                            Price <span>{showPrice ? '▲' : '▼'}</span>
                        </button>
                        {showPrice && (
                            <div className="mt-2 pl-2 space-y-2 text-sm text-gray-600">
                                <p>The highest price is $58.95</p>
                                <button className="text-blue-500 hover:underline">Reset</button>
                                <div className="flex space-x-2">
                                    <input
                                        type="number"
                                        placeholder="From"
                                        className="border rounded-md px-2 py-1 w-20 text-sm"
                                    />
                                    <input
                                        type="number"
                                        placeholder="To"
                                        className="border rounded-md px-2 py-1 w-20 text-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sort */}
                <div className="space-y-4">
                    <button
                        onClick={() => setShowSort(!showSort)}
                        className="flex justify-between items-center font-medium text-lg text-gray-700 hover:text-blue-600"
                    >
                        Sort by <span className="ml-2">{showSort ? '▲' : '▼'}</span>
                    </button>
                    {showSort && (
                        <div className="mt-1 space-y-1 text-sm text-gray-600">
                            <p>Featured</p>
                            <p>12 products</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productList.map((product, index) => (
                    <div key={index} className="p-4  transition">

                        <img src={product.img} alt={product.name} className="w-full h-[330px] object-cover rounded-lg mb-4" />
                        <p className="text-center text-lg mb-2">{product.name}</p>
                        <p className="text-center text-xl font-bold mb-4">{product.price}</p>
                        <div className="flex justify-center">
                            <button className="bg-[#35B5AC] text-[#192853] text-[18px] hover:bg-[#EBEBBF] px-6 py-3 w-full rounded-2xl border-2 border-black transition">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
