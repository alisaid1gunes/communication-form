import "./App.css";
import React, { useState, setState } from "react";
import DetailAccordion from "./components/DetailAccordion";
import CommunicationCard from "./components/CommunicationCard";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeeadback] = useState("");
  const [user,setUser] = useState({
    username: "",
    email: "",
    feedback: ""
  });
  const [users,setUsers] = useState([])
  function handleForm(event,user) {
    event.preventDefault();
    setUser(
      {user}
    )
  }
  function handleChange(event) {
    setState({ [event.target.name]: event.target.value });
  }
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center mt-1 mh-100 h-100">
        <Col md={6} className="mh-100 h-100">
          <CommunicationCard handleForm={handleForm} handleChange={handleChange} />
          <DetailAccordion />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
