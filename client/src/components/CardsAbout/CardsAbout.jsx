import React from "react";
import Card from "react-bootstrap/Card";
import { TiSocialGithub, TiSocialLinkedinCircular } from "react-icons/ti";

const CardsAbout = ({ name, img, gitHub, linkedin }) => {
  return (
    <Card border="light" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Link variant="dark" href={linkedin}>
          <TiSocialLinkedinCircular />
        </Card.Link>
        <Card.Link variant="dark" href={gitHub}>
          <TiSocialGithub />
        </Card.Link>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default CardsAbout;
