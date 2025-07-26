import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#EBEBBF] pt-10'>
            <div>
                <img 
                    className='w-full  mx-auto ' 
                    src='https://cdn.shopify.com/s/files/1/0661/3211/5670/files/Asset_32_3.png?v=1726699980' 
                    alt='Main Logo' 
                />

                <div className='flex flex-col md:flex-row justify-around items-center gap-10 px-4 py-10' style={{ backgroundColor: ' rgb(99, 194, 185)' }}>
                    
                    <div className='text-center'>
                        <p className='text-white text-2xl md:text-3xl mb-2'>Let's be friends</p>
                        <p className='text-white mb-4'>Sign up for 15% OFF, updates, and product launches.</p>
                        <input 
                            className='bg-white rounded text-black px-6 py-2 w-full max-w-xs mb-4' 
                            type='text' 
                            placeholder='Email' 
                        />
                        <br />
                        <button className="bg-[#192853] text-white px-8 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
                            Join us!
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className='w-full md:w-auto'>
                        <div className='flex flex-col md:flex-row items-center justify-between mb-4 gap-4'>
                            <p className='text-white flex space-x-4 text-xl'>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-tiktok"></i>
                            </p>
                            <img
                                className='w-[100px]'
                                src='https://cdn.shopify.com/s/files/1/0661/3211/5670/files/Juni-Logo-White-230516-1500x900_1.png?v=1685471847'
                                alt='Logo'
                            />
                        </div>

                        <ul className="text-sm text-white divide-y divide-white text-[18px] text-center md:text-left">
                            {[
                                'FAQs',
                                'Our Story',
                                'Our Team',
                                'Ambassadors',
                                'Store Locator',
                                'Contact Us',
                                'On Purpose Live Tour Sweepstakes',
                                'On Purpose Live Tour Sweepstakes Free Entry'
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="py-2 hover:underline hover:text-black transition duration-200 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Policy Section */}
                <div className='flex flex-col md:flex-row items-center justify-evenly text-center text-sm text-white hover:cursor-pointer py-4 px-4 gap-2' style={{ backgroundColor: ' rgb(99, 194, 185)' }}>
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
