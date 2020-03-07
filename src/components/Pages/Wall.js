import React, { useEffect, useRef, Suspense } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Segment,
  Grid,
  Input,
  Header,
  Menu,
  Sticky
} from 'semantic-ui-react';

import Nav from '../Nav';
import Post from '../Post';
import NewPostForm from '../NewPostForm';

const SideNav = React.lazy(() => import('../SideNav'));

const styles = {
  container: {
    paddingTop: '70px'
  }
};

const Wall = ({ auth, posts }) => {
  const history = useHistory();
  const contextRef = useRef();

  console.log(posts);

  auth = {
    user: {
      username: 'Bikram'
    }
  };

  useEffect(() => {
    console.log('[WALL AUTH] : ', !auth.user);
    if (!auth.user) {
      console.log(true);
      navigateTo('/login');
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
        <Grid columns={2} stackable divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Suspense fallback="loading">
                <SideNav user={auth.user} />
              </Suspense>
            </Grid.Column>
            <Grid.Column width={12}>
              <Header>Add a new post</Header>
              <NewPostForm />

              <Header>Recent posts</Header>
              {posts.map(post => (
                <>
                  <Post post={post} />
                  <Post post={post} />
                  <Post post={post} />
                  <Post post={post} />
                  <Post post={post} />
                </>
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
    auth: state.auth,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Wall);
