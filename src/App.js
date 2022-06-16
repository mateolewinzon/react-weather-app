import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationWithIp } from "./actions/locationActions";
import { useLocation } from "./hooks/useLocation";
import { selectLocation } from "./reducers/locationReducer";

function App() {
  const { getLocation } = useLocation();
  const { currentLocation } = useSelector(selectLocation);

  useEffect(() => {
    if (!currentLocation) {
      getLocation();
    }
  }, [currentLocation]);

  return <div className="App">{JSON.stringify(currentLocation)}</div>;
}

export default App;
