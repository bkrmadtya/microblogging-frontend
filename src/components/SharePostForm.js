import React from "react";
import { Card, Image, Header, Modal, Input } from "semantic-ui-react";

const MiniPost = ({ post, imageSrc }) => {
  return (
    <Card fluid color="brown">
      <Card.Content>
        <Image circular bordered floated="left" size="mini" src={imageSrc} />
        <Card.Header>{post.username}</Card.Header>
        <Card.Meta>{post.creationDate}</Card.Meta>
        <Card.Description>
          <pre style={{ fontFamily: "inherit" }}>{post.content}</pre>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const SharePostForm = ({ children, post, imageSrc }) => {
  return (
    <Modal style={{}} trigger={children}>
      <Modal.Header as="h4">Share the post</Modal.Header>
      <Modal.Content>
        <Input
          style={{ border: "none", color: "red" }}
          fluid
          placeholder="Write your thought about this post..."
        />
        <MiniPost post={post} imageSrc={imageSrc} />
        <Modal.Description></Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default SharePostForm;
