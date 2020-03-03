import React, { useEffect, useRef, Suspense } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  Segment,
  Grid,
  Input,
  Header,
  Menu,
  Sticky
} from "semantic-ui-react";

import Nav from "../Nav";
import Post from "../Post";

const SideNav = React.lazy(() => import("../SideNav"));

const styles = {
  container: {
    paddingTop: "70px"
  }
};

const Wall = ({ auth }) => {
  const history = useHistory();
  const contextRef = useRef();

  useEffect(() => {
    console.log("[WALL AUTH] : ", !auth.user);
    if (!auth.user) {
      console.log(true);
      navigateTo("/login");
    }
  });

  const navigateTo = path => {
    history.push(path);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Nav />

      <Container style={styles.container}>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Suspense fallback="loading">
                <SideNav user={auth.user} />
              </Suspense>
            </Grid.Column>
            <Grid.Column width={12} stretched>
              <Header>Recent posts</Header>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Wall);
