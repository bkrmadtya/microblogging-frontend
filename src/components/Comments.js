import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Comment, Header, Message } from "semantic-ui-react";

const Comments = ({ postId, loggedInUser, allComments, imageSrc }) => {
  const comments = allComments[postId]?.comments || [];

  if (comments.length === 0) {
    return (
      <Message style={{ textAlign: "center" }} info>
        No Comments yet. You can add one to start the conversation.
      </Message>
    );
  }

  return (
    <Comment.Group style={{ margin: "auto", maxWidth: "inherit" }} threaded>
      <Header as="h4">Recent comments</Header>

      {comments.map(i => (
        <SingleComment
          key={i.id}
          user={loggedInUser}
          comment={i}
          imageSrc={imageSrc}
        />
      ))}
    </Comment.Group>
  );
};

const mapStateToProps = state => {
  return {
    allComments: state.comments,
    loggedInUser: state.auth.user
  };
};

export default connect(mapStateToProps)(Comments);

const SingleComment = ({ user, comment, imageSrc }) => {
  const username = comment?.userOwnerUsername || user.username;

  return (
    <Comment>
      <Comment.Avatar src={imageSrc} />
      <Comment.Content>
        <Comment.Author as="a">{username}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.creationDate}</div>
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
