import { useState} from "react";
import SearchCity from "./components/SearchCity";
import WeatherWidget from "./components/WeatherWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import CityProvider from "./Contexts/CityContext";

function App() {

return (
    <div className="weather  ">
    <CityProvider>
      <SearchCity />
      <WeatherWidget />
    </CityProvider>
    </div>

    );
}

export default App;
