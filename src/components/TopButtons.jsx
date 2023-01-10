import React from "react";

function TopButtons( {setQuery} ) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "China",
    },
    {
      id: 3,
      title: "Japan",
    },
    {
      id: 4,
      title: "Korea",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id} onClick={()=>setQuery({q: city.title})}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
