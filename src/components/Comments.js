import React from "react";
import { connect } from "react-redux";
import { Comment, Form, Header } from "semantic-ui-react";

const SingleComment = ({ comment, imageSrc }) => {
  return (
    <Comment>
      <Comment.Avatar src={imageSrc} />
      <Comment.Content>
        <Comment.Author as="a">{comment.owner.username}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.date}</div>
        </Comment.Metadata>
        <Comment.Text>
          <pre style={{ fontFamily: "inherit", margin: 0 }}>
            {comment.content}
          </pre>
        </Comment.Text>
        {/* <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions> */}
      </Comment.Content>
    </Comment>
  );
};

const Comments = ({ comments, imageSrc }) => {
  return (
    <Comment.Group style={{ margin: "auto", maxWidth: "inherit" }} threaded>
      <Header as="h4">Recent comments</Header>

      {comments.map(i => (
        <SingleComment key={i.id} comment={i} imageSrc={imageSrc} />
      ))}
    </Comment.Group>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
