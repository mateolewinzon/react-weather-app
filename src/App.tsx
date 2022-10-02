import { Container } from "react-bootstrap";
import { LocalSection, CitiesSection, NavBar } from "components";

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <LocalSection />
        <CitiesSection />
      </Container>
    </>
  );
}

