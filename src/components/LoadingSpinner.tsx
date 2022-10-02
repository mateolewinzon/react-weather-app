
import { Spinner, Row } from "react-bootstrap";
import "styles/LoadingSpinner.css";

export const LoadingSpinner = () => {
  return (
      <Row className="justify-content-center">
          <Spinner animation="grow" />
      </Row>
  );
};