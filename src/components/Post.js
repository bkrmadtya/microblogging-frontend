import React, { useState, useEffect } from 'react';
import {
  Card,
  Header,
  Image,
  Button,
  Icon,
  Label,
  Transition
} from 'semantic-ui-react';

import CommentForm from './CommentForm';
import Comments from './Comments';

import { getComments } from '../store/actions/commentActions';
import { connect } from 'react-redux';
import SharePostForm from './SharePostForm';
import MiniPost from './MiniPost';

const Post = ({ posts, user, getComments }) => {
  const [post, setPost] = useState(posts);
  const [openComment, setOpenComment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setPost(posts);
  }, [posts, posts.shares]);

  const imageSrc = (() => {
    const images = ['molly.png', 'steve.jpg', 'jenny.jpg', 'matthew.png'];

    const randomIndex = () => {
      return Math.round(Math.random() * 3);
    };

    return `https://react.semantic-ui.com/images/avatar/large/${
      images[randomIndex()]
    }`;
  })();

  return (
    <Card raised fluid color="blue">
      <Card.Content>
        <Image
          circular
          bordered
          floated="left"
          size="mini"
          src={'https://react.semantic-ui.com/images/avatar/large/molly.png'}
        />
        <Card.Header>
          <Header as="h4">{post.username}</Header>
        </Card.Header>
        <Card.Meta>{post.creationDate}</Card.Meta>
        <Card.Description>
          <pre style={{ fontFamily: 'inherit' }}>{post.content}</pre>
        </Card.Description>
        {post.originalPost && <MiniPost post={post.originalPost} />}
      </Card.Content>
      <Card.Content style={{ padding: 0 }}>
        <Button style={styles.button}>
          <Icon name="heart outline" color="red" /> {post.likes}
        </Button>

        <Button
          style={styles.button}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <Icon name="share square outline" color="blue" /> {post.shares}
        </Button>

        <SharePostForm
          setOpenModal={setOpenModal}
          openModal={openModal}
          post={post}
          user={user}
          imageSrc={imageSrc}
        />

        <Button
          floated="right"
          style={styles.button}
          onClick={() => {
            !openComment && getComments(post.id);
            setOpenComment(!openComment);
          }}
        >
          <Icon name="comment outline" color="blue" /> {post.comments}
        </Button>
      </Card.Content>

      <Transition.Group animation="fade" duration={200}>
        {openComment && (
          <Card.Content>
            <CommentForm post={post} />
            <Comments imageSrc={imageSrc} />
          </Card.Content>
        )}
      </Transition.Group>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { getComments })(Post);

const styles = {
  button: {
    background: 'none'
  }
};
