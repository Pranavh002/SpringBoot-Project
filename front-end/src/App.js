import React from "react";
import { ThemeProvider } from "./ThemeContext";
import NavBar from "./components/NavBar";
import MatchScoreCard from "./components/MatchScoreCard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />

          <MatchScoreCard />


      </div>
    </ThemeProvider>
  );
};

export default App;
