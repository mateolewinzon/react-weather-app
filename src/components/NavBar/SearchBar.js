import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCities,
  clearSearch,
  addCity,
} from "../../actions/selectedCitiesActions";
import { SEARCH_CITY } from "../../config/texts";
import { selectCitiesState } from "../../reducers/selectedCitiesReducer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector(selectCitiesState);

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length > 3) {
      dispatch(fetchCities(e.target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  const handleClick = (result) => {
    dispatch(addCity(result));
  };

  return (
    <Form.Group>
      <Form.Control
        onChange={handleChange}
        placeholder={SEARCH_CITY}
      ></Form.Control>
      <ListGroup className="position-absolute">
        {searchResults?.map((result, index) => (
          <ListGroup.Item
            key={index}
            className="search-result"
            onClick={() => handleClick(result)}
          >{`${result.name}, ${result.country}`}</ListGroup.Item>
        ))}
      </ListGroup>
    </Form.Group>
  );
};

export default SearchBar;
