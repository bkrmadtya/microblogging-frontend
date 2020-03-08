import React, { useState } from 'react';
import { Button, Modal, Input, Header } from 'semantic-ui-react';

import MiniPost from './MiniPost';

import { sharePost } from '../store/actions/postActions';
import { connect } from 'react-redux';

const SharePostForm = ({
  setOpenModal,
  openModal,
  post,
  user,
  imageSrc,
  sharePost
}) => {
  const [content, setContent] = useState('');

  const handleSharePost = () => {
    const postToShare = {
      content: content.trim(),
      username: user.username,
      originalPostId: post.id
    };

    setOpenModal(false);
    sharePost(postToShare);
  };

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Header as="h5">Share the post</Header>
      <Modal.Content>
        <Input
          transparent
          fluid
          placeholder="Write your thought about this post..."
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <MiniPost post={post} imageSrc={imageSrc} />
      </Modal.Content>

      <Modal.Actions>
        <Button
          content="Post"
          size="mini"
          labelPosition="right"
          icon="twitter"
          primary
          disabled={!content.trim()}
          onClick={handleSharePost}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default connect(null, { sharePost })(SharePostForm);
