import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'

function HomePage() {
  return (
    <>
    <NavBar />
    <Container className="home-container">
      
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="home-title">Welcome to User Profiles App</h1>
          <p className="home-text">
            This is a simple React application demonstrating routing with React Router and Bootstrap for styling.
          </p>
          <Button variant="primary" as={Link} to="/profiles">Go to Profiles</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default HomePage;
