import React, { useState } from "react";
import { Button, Col, Form, ListGroup, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCities,
  clearSearch,
  addCity,
} from "../../actions/selectedCitiesActions";
import { store } from "../../app/store";
import {
  ERROR_FETCHING_CITY,
  SEARCH,
  SEARCH_CITY,
  TOO_MANY_CITIES,
} from "../../config/texts";
import { selectCitiesState } from "../../reducers/selectedCitiesReducer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchResults, selected, error } = useSelector(selectCitiesState);
  const [isDisabled, setDisabled] = useState(true);
  const [hideList, setHideList] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
    if (text.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
      dispatch(clearSearch());
    }
  };

  const handleSubmit = () => {
    dispatch(fetchCities(text));
  };

  const handleClickOnResult = (result) => {
    if (selected.length > 4) {
      return window.alert(TOO_MANY_CITIES);
    }
    dispatch(addCity({ city: result, index: selected.length }));
  };

  return (
    <Form.Group
      onMouseEnter={() => setHideList(false)}
      onMouseLeave={() => setHideList(true)}
    >
      <Row className="m-0">
        <Col className="p-0">
          <Form.Control
            onChange={handleChange}
            placeholder={SEARCH_CITY}
            value={text}
          />
        </Col>
        <Col className="p-0">
          <Button disabled={isDisabled} onClick={handleSubmit}>
            {SEARCH}
          </Button>
        </Col>
      </Row>
      {!hideList && (
        <ListGroup className="position-absolute">
          {searchResults?.map((result, index) => (
            <ListGroup.Item
              key={index}
              className="search-result"
              onClick={() => handleClickOnResult(result)}
            >{`${result.name}, ${result.country}`}</ListGroup.Item>
          ))}
          {error && (
            <ListGroup.Item className="search-result">
              {ERROR_FETCHING_CITY}
            </ListGroup.Item>
          )}
        </ListGroup>
      )}
    </Form.Group>
  );
};

export default SearchBar;
