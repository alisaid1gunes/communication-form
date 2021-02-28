import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Accordion, Button,Row,Col } from "react-bootstrap";
function DetailAccordion(props) {
  return (
    <>
      
      <Accordion defaultActiveKey="0" >
        <Card className="mb-3">
         
          <Card.Header>
          <Row>
            <Col md={8} >
            <span className="mr-3 ">UserName</span>
            </Col>
            <Col md={4}>
            <Accordion.Toggle as={Button} variant="info" eventKey="0">
              Detail
            </Accordion.Toggle>
            <Button className="ml-3" variant="danger">
              Delete
            </Button>
            </Col>
          </Row>
           
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
  
      </Accordion>
    </>
  );
}
export default DetailAccordion;
