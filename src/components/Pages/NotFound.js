import React from "react";
import { useHistory } from "react-router-dom";
import {
  Segment,
  Header,
  Icon,
  Container,
  Message,
  Button
} from "semantic-ui-react";

const NotFound = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };
  return (
    <Container>
      <Segment placeholder basic style={{ textAlign: "center" }}>
        <Header as="h3" icon>
          <Icon name="search" />
          ERROR 404, NOT FOUND!
        </Header>
        <Button
          as="a"
          onClick={goToHomePage}
          style={{ background: "transparent", color: "olive" }}
        >
          Go to Home Page
        </Button>
      </Segment>
    </Container>
  );
};

export default NotFound;
