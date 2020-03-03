import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const styles = {
  card: {
    borderColor: "blue"
  },
  button: {
    background: "none"
  }
};

const Post = ({ post }) => {
  const imageSrc = (() => {
    const images = ["molly.png", "steve.jpg", "jenny.jpg", "matthew.png"];

    const randomIndex = () => {
      return Math.round(Math.random() * 3);
    };

    return `https://react.semantic-ui.com/images/avatar/large/${
      images[randomIndex()]
    }`;
  })();

  return (
    <Card fluid style={styles.card}>
      <Card.Content>
        <Image circular bordered floated="left" size="mini" src={imageSrc} />
        <Card.Header>{post.username}</Card.Header>
        <Card.Meta>{post.creationDate}</Card.Meta>
        <Card.Description>{post.content}</Card.Description>
      </Card.Content>
      <Card.Content style={{ padding: 0 }}>
        <Button style={styles.button}>
          <Icon name="heart outline" color="red" /> {post.likes}
        </Button>
        <Button style={styles.button}>
          <Icon name="share square outline" color="blue" /> {post.shares}
        </Button>
        <Button floated="right" style={styles.button}>
          <Icon name="comment outline" color="blue" /> {post.comments}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Post;
