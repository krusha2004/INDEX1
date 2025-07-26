import React, { useState } from 'react';

const flavors = [
    {
        name: '🍑 Peach',
        image:
            'https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156940&width=100',
    },
    {
        name: '🍋 Lemon',
        image:
            'https://drinkjuni.com/cdn/shop/files/Juni_Lemon_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=100',
    },
    {   
        name: '🍒 Cherry Lime',
        image: 'https://drinkjuni.com/cdn/shop/files/Juni-CherryLime_1.png?v=1744221028&width=533',
    },
    {   
        name: '🌴 Tropical',
        image: 'https://drinkjuni.com/cdn/shop/files/Juni_Tropical_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156939&width=533',
    },
    {
        name: '🍓 Strawberry Hibiscus',
        image: 'https://drinkjuni.com/cdn/shop/files/Juni-StrawberryHibiscus_1.png?v=1731505069&width=533',
    },
];

const MainProduct = () => {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#EBEBBF] min-h-screen flex justify-between">
            <div className="flex flex-col md:flex-row gap-10 items-center  p-6 ">
                <div>
                    <img
                        src={
                            selected?.image ||
                            'https://drinkjuni.com/cdn/shop/files/Juni_Peach_Adaptogenic_Drink_Jay_Shetty_1.png?v=1744156940&width=823'
                        }
                        alt=""
                        className="w-[600px] "
                    />
                </div> 
                <div className="space-y-3 text-center md:text-left">
                    <p className="text-2xl font-semibold text-[#192853]">
                        {selected?.name || 'Peach'}
                    </p> 
                    <p className="text-[#192853]">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i> (109)
                    </p>
                    <p className="text-xl font-medium">$29.95 USD</p>

                    <div className="mt-6">
                        <p className="font-semibold mb-2">Flavors</p>
                        <div className="relative w-64">
                            <div
                                onClick={() => setOpen(!open)}
                                className="border border-gray-300 bg-white px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer shadow hover:shadow-md transition"
                            >
                                {selected ? (
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={selected.image}
                                            alt={selected.name}
                                            className="w-8 h-8 object-contain"
                                        />
                                        <span>{selected.name}</span>
                                    </div>
                                ) : (
                                    <span className="text-gray-400">Choose a flavor</span>
                                )}
                                <span>{open ? '▲' : '▼'}</span>
                            </div>

                            {open && (
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {flavors.map((flavor, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setSelected(flavor);
                                                setOpen(false);
                                            }}
                                            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition"
                                        >
                                            <img
                                                src={flavor.image}
                                                alt={flavor.name}
                                                className="w-8 h-8 object-contain"
                                            />
                                            <span>{flavor.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>

                        <p>  One time purchase 
                            -i
                            $29.95</p>
                        <p> Subscribe and Save 10%
                            -
                            $26.96 $29.95</p>

                        <button>  Add to cart </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainProduct;
