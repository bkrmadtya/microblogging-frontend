import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Header } from "semantic-ui-react";

import { addComment } from "../store/actions/commentActions";

const CommentForm = ({ user, addComment, post }) => {
  const [content, setContent] = useState("");

  const handleAddComment = () => {
    const newComment = {
      content,
      owner: user,
      postId: post.id
    };
    addComment(newComment);
    setContent("");
  };

  return (
    <Form onSubmit={handleAddComment}>
      <Header as="h5">Add a comment</Header>
      <Form.TextArea
        value={content}
        onChange={({ target }) => {
          setContent(target.value);
        }}
      />
      <Form.Button
        content="Comment"
        size="mini"
        labelPosition="right"
        icon="twitter"
        primary
        disabled={!content.trim().length}
      />
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { addComment })(CommentForm);
