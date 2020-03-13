import React from "react";
import {
  Container,
  Header,
  Segment,
  Form,
  Icon,
  Image,
  Button
} from "semantic-ui-react";

import Nav from "../Nav";
import Notification from "../Notification";

const AccountSetting = () => {
  const imageSrc =
    "https://react.semantic-ui.com/images/avatar/large/molly.png";

  return (
    <>
      <Nav />
      <Container style={styles.container}>
        <Notification />
        <Segment basic style={styles.placeholder} textAlign="center">
          <Header icon>
            <Icon>
              <Image
                size="small"
                rounded
                style={{ margin: "auto" }}
                src={imageSrc}
              />
            </Icon>
            Bikram Karki
            <Header.Subheader>Joined date</Header.Subheader>
          </Header>
        </Segment>
      </Container>
    </>
  );
};

export default AccountSetting;

const styles = {
  container: {
    paddingTop: "70px"
  },
  placeholder: {
    padding: "30px 0"
  }
};
