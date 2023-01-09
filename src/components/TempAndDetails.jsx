import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div
        className="flex items-center justify-center py-6 text-xl
          text-cyan-300"
      >
        <p>Cloudy Weather</p>
      </div>

      <div className=" flex flex-row items-center justify-between  text-white py-3">
        <img src="https://openclipart.org/image/2400px/svg_to_png/208526/sunicon.png" alt="xyz" className=" w-20" />
        <p className=" text-5xl">32c</p>
        <div className="flex flex-col space-y-2">
          <div className=" flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className=" mr-1" />
            Real fell:
            <span className="font-medium ml-1 font-bold">12C</span>
          </div>
          <div className=" flex font-light text-sm items-center justify-center">
            <UilTear size={18} className=" mr-1" />
            Humidity:
            <span className="font-medium ml-1 font-bold">58%</span>
          </div>
          <div className=" flex font-light text-sm items-center justify-center">
            <UilWind size={18} className=" mr-1" />
            Wind:
            <span className="font-medium ml-1 font-bold">11 km/h</span>
          </div>
        </div>
      </div>

      <div
        className=" flex flex-row items-center justify-center
       space-x-2 text-white  text-sm py-3"
      >
        <UilSun />
        <p className=" font-light ">
          Rise: <span className=" font-bold ml-1">06:45 AM</span>
        </p>
        <p className=" font-light">|</p>
        <UilSunset />
        <p className=" font-light ">
          Set: <span className=" font-bold ml-1">06:45 PM</span>
        </p>
        <p className=" font-light">|</p>
        <UilSun />
        <p className=" font-light ">
          High: <span className=" font-bold ml-1">40C</span>
        </p>
        <p className=" font-light">|</p>
        <UilSun />
        <p className=" font-light ">
          Low: <span className=" font-bold ml-1">40C</span>
        </p> 
      </div>
    </div>
  );
}

export default TempAndDetails;
