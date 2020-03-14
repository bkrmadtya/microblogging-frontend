import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Grid, Header, Message, Divider } from "semantic-ui-react";

import Nav from "../Nav";
import Post from "../Post/Post";
import NewPostForm from "../Post/NewPostForm";
import SideNav from "../SideNav";
import Notification from "../Notification";

const Home = ({ loggedInUser, posts }) => {
  return (
    <>
      <Nav />
      <Container style={styles.container}>
        <Notification />
        <Grid columns={2} stackable divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <SideNav />
            </Grid.Column>
            <Grid.Column width={12}>
              {loggedInUser && (
                <>
                  <Header as="h3">Add a new post</Header>
                  <NewPostForm user={loggedInUser} />
                </>
              )}

              <Header as="h3">Recent posts</Header>
              <Divider />
              {posts.length ? (
                <AllPosts posts={posts} />
              ) : (
                <Message style={{ textAlign: "center" }} info>
                  No post yet, please create one
                </Message>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.user,
    posts: state.posts.publicPosts
  };
};

export default connect(mapStateToProps)(Home);

const AllPosts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.postId + post.content} post={post} />
      ))}
    </>
  );
};

const styles = {
  container: {
    paddingTop: "70px"
  }
};
