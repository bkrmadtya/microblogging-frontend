import React, { useState } from 'react';
import { Card, Image, Button, Modal, Input, Header } from 'semantic-ui-react';

const MiniPost = ({ post, imageSrc }) => {
  return (
    <Card fluid color="brown">
      <Card.Content>
        <Image circular bordered floated="left" size="mini" src={imageSrc} />
        <Card.Header>{post.username}</Card.Header>
        <Card.Meta>{post.creationDate}</Card.Meta>
        <Card.Description>
          <pre style={{ fontFamily: 'inherit' }}>{post.content}</pre>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MiniPost;
