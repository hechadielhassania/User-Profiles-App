import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'


function ProfilesPage() {
  // Dummy user data (replace with your actual data)
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", bio: "A passionate developer." },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", bio: "An avid reader and writer." },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", bio: "A nature enthusiast." }
  ];

  // Render user profiles
  return (
    <>
    <NavBar />
    <Container className="profiles-container">
      
      <Row className="justify-content-center">
        {users.map(user => (
          <Col key={user.id} xs={12} sm={6} md={4}>
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <Link to={`/profile/${user.id}`} className="btn btn-primary">View Profile</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default ProfilesPage;
