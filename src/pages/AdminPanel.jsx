import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Coursedata from "../components/CoursCard/Coursedata";
import { Card, Button, Col, Row } from "react-bootstrap";


function CoursList() {
  return (
    <Row xs={1} md={2} lg={5} className="g-4">
      {Coursedata.map((value, index) => (
        <Col key={index}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={value.cover} />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.desc}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}


export default CoursList;