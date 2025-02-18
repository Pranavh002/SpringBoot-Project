import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useTheme } from "../ThemeContext";

const FavouriteTeams = () => {
  const { isDarkMode } = useTheme();

  return (
    <Card className={`shadow-sm rounded-3 border-0 ${isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
      <Card.Body>
        <Card.Title>Favourite Teams</Card.Title>
        <ListGroup variant="flush">
          {["India", "Australia", "England", "South Africa"].map((team, index) => (
            <ListGroup.Item key={index} className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
              {team}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default FavouriteTeams;
