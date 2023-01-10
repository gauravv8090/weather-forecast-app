import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedData from "./services/weatherServices";

function App() {
  const [query, setQuery] = useState({ q: "spain" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshHold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshHold) return "from-cyan-700 to-blue-700";
    else {
      return "from-yellow-700 to-orange-700";
    }
  };

  useEffect(() => {
    const data = async () => {
      await getFormattedData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    data();
  }, [query, units]);

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl 
    shadow-grey-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
