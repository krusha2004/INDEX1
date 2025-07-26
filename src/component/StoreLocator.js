import React from 'react';

const StoreLocator = () => {
  const storeData = [
    {
      name: "Costco",
      address: "3411 St. Rose Parkway, Henderson, NV 89052",
      phone: "1-800-774-2678",
      website: "https://www.costco.com",
    },
    {
      name: "Target",
      address: "695 S Green Valley Pkwy, Henderson, NV 89052",
      phone: "1-800-440-0680",
      website: "https://www.target.com",
    },
    {
      name: "Sprouts Farmers Market",
      address: "635 South Green Valley Pkwy, Henderson, NV 89052",
      phone: "702-322-2229",
      website: "https://www.sprouts.com",
    },
  ];

  return (
    <div className="bg-[#EBEBBF] py-10">
      {/* Header Section */}
      <div className="text-center px-4">
        <p className="text-3xl md:text-5xl font-bold mb-6">Find Juni Adaptogen Drinks Near You!</p>
        <img
          className="mx-auto w-60 md:w-80"
          src="https://drinkjuni.com/cdn/shop/files/Sprouts_Farmers_Market_Logo.png?v=1743642181&width=500"
          alt="Sprouts Farmers Market"
        />
        <p className="mt-4 text-xl font-semibold">Buy 1, get 1 free!</p>
        <p className="text-lg text-pink-700 underline cursor-pointer">Redeem Now</p>
      </div>

      {/* Locator Section */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 mt-10">
        {/* Store List */}
        <div className="lg:w-2/3 w-full">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <input
              className="p-2 border rounded w-full sm:max-w-sm"
              type="text"
              placeholder="Search store..."
            />
            <button className="bg-pink-600 px-4 py-2 rounded text-white">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Store Cards */}
          <div className="space-y-4">
            {storeData.map((store, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white"
              >
                <h2 className="text-lg font-bold text-gray-800">{store.name}</h2>
                <p className="text-gray-700">{store.address}</p>
                <p className="text-gray-600">{store.phone}</p>
                <a
                  href={store.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {store.website}
                </a>
                <div className="text-green-600 mt-2 hover:underline cursor-pointer">View on map</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:w-1/3 w-full bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Map Section</h2>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d131852.09736198527!2d72.91780564362347!3d21.21343587417568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746160586458!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
