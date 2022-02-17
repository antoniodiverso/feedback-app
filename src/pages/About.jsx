import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this proyect</h1>
        <p>This is a React app to leave feedback for a product or a service</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to="/">Return to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
