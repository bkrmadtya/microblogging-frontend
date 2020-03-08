import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';

import Nav from '../Nav';
import Post from '../Post';
import NewPostForm from '../NewPostForm';
import SideNav from '../SideNav';

const Wall = ({ user, posts }) => {
  const history = useHistory();

  const navigateTo = path => {
    history.push(path);
  };

  useEffect(() => {
    if (!user) {
      navigateTo('/login');
    }
  });

  useEffect(() => {
    console.log('Post updated', posts);
  }, [posts]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Nav />

      <Container style={styles.container}>
        <Grid columns={2} stackable divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Suspense fallback="loading">
                <SideNav user={user} />
              </Suspense>
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h5">Add a new post</Header>

              <NewPostForm user={user} />

              <Header as="h5">Recent posts</Header>
              {posts.map(post => (
                <Post key={post.id} posts={post} />
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Wall);

const styles = {
  container: {
    paddingTop: '70px'
  }
};
