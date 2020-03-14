import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Segment,
  Form,
  Icon,
  Image,
  Button,
  Divider,
  Message
} from "semantic-ui-react";

import Nav from "../Nav";
import Post from "../Post/Post";
import Notification from "../Notification";

import { getUserByUsername } from "../../store/actions/userActions";
import { getPostsByUsername } from "../../store/actions/postActions";

const Profile = ({
  user,
  loggedInUser,
  posts,
  getUserByUsername,
  getPostsByUsername
}) => {
  const history = useHistory();
  const location = useLocation();
  const userToGet = location.pathname.slice(6);

  useEffect(() => {
    getUserByUsername(userToGet);
    getPostsByUsername(userToGet);
  }, []);

  useEffect(() => {
    if (!loggedInUser) {
      if (user?.username !== loggedInUser?.username && user?.private) {
        history.push("/notfound");
      }
    }
  });

  if (!user) {
    return null;
  }

  const imageSrc =
    "https://react.semantic-ui.com/images/avatar/large/molly.png";

  return (
    <>
      <Nav />
      <Container style={styles.container}>
        <Notification />
        <Segment
          style={styles.placeholder}
          inverted
          color="violet"
          textAlign="center"
        >
          <Header style={styles.header} icon>
            <Icon>
              <Image
                size="small"
                circular
                style={{ margin: "auto" }}
                src={imageSrc}
              />
            </Icon>
            {user.username}
            <Header.Subheader style={{ color: "white" }}>
              {user.email}
            </Header.Subheader>
            <Header.Subheader style={{ color: "white" }}>
              <strong>Joined:</strong> <em>{user.creationDate}</em>
            </Header.Subheader>

            <Segment basic style={{ padding: 0, color: "white" }}>
              <Header
                style={{ color: "white", margin: "auto 20px" }}
                as="h2"
                floated="left"
              >
                {user.numberOfFollowers}
                <Header.Subheader style={{ color: "white" }}>
                  Followers
                </Header.Subheader>
              </Header>
              <Header
                style={{ color: "white", margin: "auto 20px" }}
                as="h2"
                floated="right"
              >
                {user.numberOfFollowing}
                <Header.Subheader style={{ color: "white" }}>
                  Followings
                </Header.Subheader>
              </Header>
            </Segment>
          </Header>
        </Segment>
        <Segment basic>
          <Header textAlign="center" as="h4" style={styles.header}>
            Activities
          </Header>
        </Segment>
        {posts.length ? (
          <AllPosts posts={posts} />
        ) : (
          <Message style={{ textAlign: "center" }} info>
            {user.username} has not posted anything yet!
          </Message>
        )}
      </Container>
    </>
  );
};

const AllPosts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.postId} post={post} />
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.user,
    user: state.user,
    posts: state.posts.userPosts
  };
};

export default connect(mapStateToProps, {
  getUserByUsername,
  getPostsByUsername
})(Profile);

const styles = {
  container: {
    paddingTop: "70px"
  },
  placeholder: {
    padding: "20px 0"
  },
  header: {
    margin: 0
  }
};
