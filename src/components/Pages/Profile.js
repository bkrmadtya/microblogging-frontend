import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
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
} from 'semantic-ui-react';

import Nav from '../Nav';
import Post from '../Post/Post';
import Notification from '../Notification';
import UserInfoBoard from '../UserInfoBoard';

import { getUserByUsername } from '../../store/actions/userActions';
import { getPostsByUsername } from '../../store/actions/postActions';

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
  }, [getPostsByUsername, getUserByUsername, userToGet]);

  // console.log(loggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      if (user?.username !== loggedInUser?.username && user?.private) {
        history.push('/notfound');
      }
    }
  });

  if (!user) {
    return <Segment loading></Segment>;
  }
  return (
    <>
      <Nav />
      <Container style={styles.container}>
        <Notification />

        <UserInfoBoard user={user} />

        <Segment basic>
          <Header textAlign="center" as="h4" style={styles.header}>
            Activities
          </Header>
        </Segment>
        {posts.length ? (
          <AllPosts posts={posts} />
        ) : (
          <Message style={{ textAlign: 'center' }} info>
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
    paddingTop: '70px'
  },
  placeholder: {
    padding: '20px 0'
  },
  header: {
    margin: 0
  }
};
