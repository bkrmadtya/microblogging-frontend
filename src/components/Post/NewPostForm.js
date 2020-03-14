import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Image, Header, TextArea, Form } from "semantic-ui-react";

import { addPost } from "../../store/actions/postActions";

const NewPostForm = ({ user, addPost }) => {
  const [content, setContent] = useState("");

  const imageSrc =
    "https://react.semantic-ui.com/images/avatar/large/molly.png";

  const handleAddPost = () => {
    console.log(user);
    const newPost = {
      content: content.trim(),
      owner: user.userId
    };

    addPost(newPost, user.username);

    setContent("");
  };

  return (
    <Card raised fluid style={styles.card}>
      <Card.Content>
        <Image circular bordered floated="left" size="mini" src={imageSrc} />
        <Card.Header>
          <Header as="h4">{user.username}</Header>
        </Card.Header>
        <Card.Meta>{new Date().toDateString()}</Card.Meta>
        <Card.Description>
          <Form size="tiny" onSubmit={handleAddPost}>
            <Form.Field
              control={TextArea}
              value={content}
              placeholder="What's your thought today?"
              rows={1}
              onChange={({ target }) => setContent(target.value)}
            />

            <Form.Button
              content="Post"
              size="mini"
              labelPosition="right"
              icon="twitter"
              primary
              floated="right"
              disabled={!content.trim()}
            />
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
