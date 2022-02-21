import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

import Covid from "./components/Covid";

export default function App() {
  return (
    <Container fluid={"md"}>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <Covid />
        </Col>
      </Row>
    </Container>
  );
}
