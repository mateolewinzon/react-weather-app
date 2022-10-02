
import { Alert, Button, Card } from "react-bootstrap";
import { deleteCity } from "actions/selectedCitiesActions";
import { LoadingSpinner, CityCardContent } from "components";
import {
  SEARCH_TO_ADD_CITY,
  DELETE,
  ERROR_FETCHING_WEATHER,
} from "config/texts";
import "styles/City.css";
import { useAppDispatch } from "app/store";

type Props = {
  city: { [key: string]: any },
  cityIndex: number
}

export const CityCard = ({ city, cityIndex }: Props) => {
  const dispatch = useAppDispatch();

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
            <CityCardContent currentWeather={data.weather.current} />
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