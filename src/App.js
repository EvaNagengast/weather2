import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <div className="row"></div>
        <div> WeatherSearch</div>
        <div>
          <Container fluid>
            <Row>
              <Col>1 of 1</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
