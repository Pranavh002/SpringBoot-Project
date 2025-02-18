import React from "react";
import { ThemeProvider } from "./ThemeContext";
import NavBar from "./components/NavBar";
import MatchScoreCard from "./components/MatchScoreCard";
import FriendsList from "./components/FriendsList";
import FavouriteTeams from "./components/FavouriteTeams";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        
        {/* Main Content */}
        <Container className="mt-4">
          <Row className="justify-content-center">
            {/* Friends List Column */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <FriendsList />
            </Col>

            {/* Match Score Card Column */}
            <Col xs={12} md={4} lg={6} className="mb-4">
              <MatchScoreCard />
            </Col>

            {/* Favourite Teams Column */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <FavouriteTeams />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
