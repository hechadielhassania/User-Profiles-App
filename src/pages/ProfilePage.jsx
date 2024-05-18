import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'

function ProfilePage() {
  // Get the user ID from the URL
  const { id } = useParams();

  // Dummy user data
  const user = {
    1: { name: "John Doe", email: "john.doe@example.com", bio: "A passionate developer." },
    2: { name: "Jane Smith", email: "jane.smith@example.com", bio: "An avid reader and writer." },
    3: { name: "Alice Johnson", email: "alice.johnson@example.com", bio: "A nature enthusiast." }
  };

  // Get the user details based on the ID from the URL
  const userDetails = user[id];

  // If user details are not found, display a message
  if (!userDetails) {
    return <div>User not found</div>;
  }

  // Render user details
  return (
    <>
    <NavBar />
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title className="text-center">{userDetails.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">{userDetails.email}</Card.Subtitle>
              <Card.Text className="text-center">{userDetails.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ProfilePage;
