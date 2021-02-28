import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form } from "react-bootstrap";


function CommunicationCard(props) {
  const user = props.user
  return (
    <Card className="mh-100 h-100 mb-3">
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="username" name="username"  />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Write your feedback here</Form.Label>
            <Form.Control as="textarea" rows={19} name="feedback"/>
          </Form.Group>
        </Form>
        <Button className="w-100" variant="success">
          Add
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CommunicationCard;
