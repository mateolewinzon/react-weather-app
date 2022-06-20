import React from "react";
import {
  Container,
  Form,
  ListGroup,
  Navbar as BootstrapNavBar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, clearSearch } from "../../actions/weatherActions";
import { APP_TITLE, SEARCH_CITY } from "../../config/texts";
import { selectCitiesState } from "../../reducers/selectedCitiesReducer";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const {searchResults} = useSelector(selectCitiesState);

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length > 3) {
      dispatch(fetchCities(e.target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  return (
    <BootstrapNavBar className="nav-bar" variant="dark" bg="darK">
      <Container>
        <BootstrapNavBar.Brand>{APP_TITLE}</BootstrapNavBar.Brand>

        <Form.Group>
          <Form.Control
            onChange={handleChange}
            placeholder={SEARCH_CITY}
          ></Form.Control>
          <ListGroup className="position-absolute">
            {searchResults?.map((r) => (
              <ListGroup.Item
              className="search-result"
                onClick={() => {}}
              >{`${r.name}, ${r.country}`}</ListGroup.Item>
            ))}
          </ListGroup>
        </Form.Group>
      </Container>
    </BootstrapNavBar>
  );
};

export default NavBar;
