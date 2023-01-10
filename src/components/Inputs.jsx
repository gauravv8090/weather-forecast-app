import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Inputs( {setQuery, units, setUnits} ) {

  const [city, setCity] = useState("");

  const handelClick = ()=>{
    if(city !== "" ){
      setQuery({q: city});
    }
  }

  const handelLocationClick = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({lat, lon})
      })
    }
  }

  const handelUnitsChange = (e)=>{
    const selectedUnit = e.target.name
    if(units !== selectedUnit){
      setUnits(selectedUnit)
    }
  }

  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4  items-center justify-center space-x-4 ">
        <input
        value={city}
        onChange={(e)=>setCity(e.target.value)}
          type="text"
          placeholder="Search for city..."
          className=" text-xl font-light p-2 focus:outline-none capitalize w-full shadow-xl placeholder:lowercase"
        />
        <UilSearch
          onClick={handelClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handelLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center ">
        <button
          name="metric"
          onClick={handelUnitsChange}
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          &deg;C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          onClick={handelUnitsChange}
          className="text-xl text-white font-light transition ease-out hover:scale-125 "
        >
          &deg;F{" "}
        </button>
      </div>
    </div>
  );
}

export default Inputs;
