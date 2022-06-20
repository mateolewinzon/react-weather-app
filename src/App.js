import React, { useEffect } from "react";
import CitiesWeather from "./components/CitiesWeather/CitiesWeather";
import LocalWeather from "./components/LocalWeather/LocalWeather";
import NavBar from "./components/NavBar/NavBar";
import { getCurrentCity } from "./services/locationService";


function App() {
  return (
    <>
      <NavBar />
      <LocalWeather />
      <CitiesWeather/>
    </>
  );
}

export default App;
