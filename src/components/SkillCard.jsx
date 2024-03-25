import React from "react";
import { Card, CardBody } from "react-bootstrap"; // You can use React Bootstrap components here

const SkillCard = ({ icon, title, description }) => {
  return (
    <Card className="skill-card bg-light">
      <CardBody>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
