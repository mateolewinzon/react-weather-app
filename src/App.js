import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CitiesWeather from "./components/CitiesWeather/CitiesWeather";
import LocalWeather from "./components/LocalWeather/LocalWeather";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <LocalWeather />
        <CitiesWeather />
      </Container>
    </>
  );
}

export default App;
