import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Image, Button, TextArea, Form } from "semantic-ui-react";

import { addPost } from "../store/actions/postActions";

const NewPostForm = ({ addPost }) => {
  const [content, setContent] = useState();

  const imageSrc = (() => {
    const images = ["molly.png", "steve.jpg", "jenny.jpg", "matthew.png"];

    const randomIndex = () => {
      return Math.round(Math.random() * 3);
    };

    return `https://react.semantic-ui.com/images/avatar/large/${
      images[randomIndex()]
    }`;
  })();

  const handleAddPost = () => {
    const newPost = {
      content: content
    };

    addPost(newPost);
  };

  return (
    <Card fluid style={styles.card}>
      <Card.Content>
        <Image circular bordered floated="left" size="mini" src={imageSrc} />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Description>
          <Form onSubmit={handleAddPost}>
            <Form.Field
              control={TextArea}
              placeholder="What's your thought today?"
              rows={1}
              onChange={({ target }) => setContent(target.value)}
            />

            <Button
              type="submit"
              floated="right"
              primary
              basic
              disabled={!content}
            >
              Post
            </Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default connect(null, { addPost })(NewPostForm);

const styles = {
  card: {
    borderColor: "blue"
  },
  button: {
    background: "none"
  }
};
