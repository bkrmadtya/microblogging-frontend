import React from "react";
import { Card, Header, Image } from "semantic-ui-react";

const MiniPost = ({ post }) => {
  return (
    <Card fluid color="green">
      <Card.Content>
        <Header style={{ textAlign: "left" }} as="h4" image>
          <Image
            circular
            size="mini"
            src={"https://react.semantic-ui.com/images/avatar/large/molly.png"}
          />
          <Header.Content>
            {post.username}
            <Header.Subheader>{post.postCreatedDate}</Header.Subheader>
          </Header.Content>
        </Header>
        {/* <Card.Header>{post.username}</Card.Header> */}
        {/* <Card.Meta>{post.creationDate}</Card.Meta> */}
        <Card.Description>
          <pre style={{ fontFamily: "inherit", margin: 0 }}>{post.content}</pre>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MiniPost;
