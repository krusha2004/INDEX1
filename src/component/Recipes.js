import React from 'react';

const Recipes = () => {
  const recipeList = [
    {
      img: 'https://drinkjuni.com/cdn/shop/articles/juni-cinnamon-apple-mocktail.png?v=1727807504',
      title: 'Cinnamon Apple Mocktail',
    },
     {
      img: 'https://drinkjuni.com/cdn/shop/articles/Juni_Adaptogenic_Drink_Mocktail_Haloween.png?v=1727811626&width=1000',
      title: 'Winterberry Bliss Mocktail',
    },
    
    {
      img: 'https://drinkjuni.com/cdn/shop/articles/Juni_Adaptogenic_Drink_Peach_Sleepy_Girl_Mocktail.png?v=1727811643&width=1000',
      title: 'Golden Hour Turmeric Mocktail',
    },
    {
      img: 'https://drinkjuni.com/cdn/shop/articles/Juni_Adaptogenic_Drink_Blueberry_Mojito_Mocktail.png?v=1727811944&width=1000',
      title: 'Blueberry Mojito Mocktail',
    },
   
  ];

  return (
    <div className="bg-pink-100 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center capitalize">Our Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {recipeList.map((item, index) => (
          <div key={index} className="w-full">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
              src={item.img}
              alt={item.title}
            />
            <p className="text-center text-xl font-medium mt-4 text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
