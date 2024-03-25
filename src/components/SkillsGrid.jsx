import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // You can use React Bootstrap components here
import SkillCard from "./SkillCard";

const SkillsGrid = ({ skills }) => {
  return (
    <Container>
      <Row>
        {skills.map((skill, index) => (
          <Col sm="6" md="4" lg="3" key={index}>
            <SkillCard {...skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsGrid;
// function data(a) {
//   console.log(a);
//   return a;
// }
// let b = [1, 2, 3, 4, 5, 6, 7];
// let c = b.map((a, b, c) => c);
// console.log(c);
// const myFoodArray = ["apple", "mango", "bnana"];
// console.log(myFoodArray);
// const myNewFoodArray = myFoodArray.map((item) => `${item} is my favurite`);
// console.log(myNewFoodArray);
// const books = ["maths", "english", "science"];
// console.log(books);
// const favouriteBook = books.map((item) => `${item} is my favourite book`);

// console.log("🚀 ~ favouriteBook:", favouriteBook);
