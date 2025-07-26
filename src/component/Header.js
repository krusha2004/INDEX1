import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

    return (
        <header className="z-50 relative">
            <p className="text-center p-2 bg-[#F1F1B4] font-semibold">
                <a href="#">Free Shipping on all orders →</a>
            </p>

            <nav className="bg-white shadow-md w-full">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 space-x-6 items-center">
                        <div
                            className="relative group z-50"
                            onMouseEnter={() => setIsShopDropdownOpen(true)}
                            onMouseLeave={() => setIsShopDropdownOpen(false)}
                        >
                            <Link
                                to="/"
                                className="flex items-center text-gray-700 hover:text-blue-500 text-lg cursor-pointer"
                            >
                                Shop
                                <ChevronDown
                                    className={`w-5 h-5 ml-1 transition-transform ${isShopDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                />
                            </Link>
                            {isShopDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-50">
                                    <Link to="/product" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">New Arrivals</Link>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Best Sellers</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Sale</a>
                                </div>
                            )}
                        </div>

                        <Link to="/ingredients" className="text-gray-700 hover:text-blue-500 text-lg">
                            Our Ingredients
                        </Link>
                        <Link to="/store" className="text-gray-700 hover:text-blue-500 text-lg">
                            Store Locator
                        </Link>
                        <Link to="/recipes" className="text-gray-700 hover:text-blue-500 text-lg">
                            Recipes
                        </Link>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex-1 text-center">
                        <img
                            className="mx-auto w-[100px]"
                            src="https://drinkjuni.com/cdn/shop/files/Juni-Logowithtag-PMS295-230522_1_360x_a5f6af55-8c48-4eec-8f1e-6626034beb39.png?v=1685607333&width=200"
                            alt="Drink Juni"
                        />
                    </Link>

                    {/* Icons */}
                    <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
                        <Search className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                        <AiOutlineUser className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                        <FaShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                    </div>

                    {/* Mobile Toggle Button */}
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white border-t z-50">
                        <span className="text-gray-700 hover:text-blue-500 text-lg cursor-pointer">Shop</span>
                        <Link to="/ingredients" className="text-gray-700 hover:text-blue-500 text-lg">
                            Our Ingredients
                        </Link>
                        <Link to="/store" className="text-gray-700 hover:text-blue-500 text-lg">
                            Store Locator
                        </Link>
                        <Link to="/recipes" className="text-gray-700 hover:text-blue-500 text-lg">
                            Recipes
                        </Link>

                        <div className="flex space-x-4">
                            <Search className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                            <Link to="/signup">
                                <AiOutlineUser className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                            </Link>
                            <FaShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
