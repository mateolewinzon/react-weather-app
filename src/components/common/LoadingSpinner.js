import React from "react";
import { Container, Spinner, Row } from "react-bootstrap";
import "./LoadingSpinner.css";

const LoadingSpinner = (size) => {
  return (
      <Row className={`justify-content-center ${size !=='sm' && 'm-5'}`}>
          <Spinner size={size} className={size !=='sm' && 'm-5'} animation="grow" />
      </Row>
  );
};

export default LoadingSpinner;
