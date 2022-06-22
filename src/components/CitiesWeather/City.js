import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../actions/selectedCitiesActions";
import LoadingSpinner from "../common/LoadingSpinner";
import CardContent from "./CityCardContent";
import {
  SEARCH_TO_ADD_CITY,
  DELETE,
  ERROR_FETCHING_WEATHER,
} from "../../config/texts";
import "./City.css";

const CityCard = ({ city, cityIndex }) => {
  const dispatch = useDispatch();

  const { loading, data, error } = city;
 
  const handleDelete = () => {
    dispatch(deleteCity(cityIndex));
  };

  return (
    <Card className="city-card">
      {data ? (
        <>
          <Card.Title>{data.name}</Card.Title>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <Alert>{ERROR_FETCHING_WEATHER}</Alert>
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
