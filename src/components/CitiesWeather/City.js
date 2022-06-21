import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../actions/selectedCitiesActions";
import LoadingSpinner from "../common/LoadingSpinner";
import CardContent from "./CityCardContent";
import { SEARCH_TO_ADD_CITY, DELETE } from "../../config/texts";
import "./City.css";

const CityCard = ({ city, cityIndex }) => {
  const dispatch = useDispatch();

  const { loading, data } = city;
  useEffect(() => {}, [data]);

  const handleDelete = () => {
    dispatch(deleteCity(cityIndex))
  };

  return (
    <Card className="city-card">
      {data ? (
        <>
          <Card.Title>{data.name}</Card.Title>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <CardContent currentWeather={data.weather.current} />
          )}
          <Button onClick={handleDelete} variant="danger">
            {DELETE}
          </Button>
        </>
      ) : (
        <div className="city-card-empty">{SEARCH_TO_ADD_CITY}</div>
      )}
    </Card>
  );
};

export default CityCard;
