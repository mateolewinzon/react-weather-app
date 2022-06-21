import React from "react";
import { Card } from "react-bootstrap";

const CityCard = ({ city }) => {
  return <Card>{city.name}</Card>;
};

export default CityCard;
