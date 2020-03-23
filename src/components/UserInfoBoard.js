import React from 'react';
import { Segment, Label, Icon, Image, Header } from 'semantic-ui-react';

import ImageUploader from './utils/Image Uploader/ImageUploader';

const UserInfoBoard = ({ user, color }) => {
  const imageSrc =
    'https://react.semantic-ui.com/images/avatar/large/molly.png';

  return (
    <>
      <Segment
        style={styles.placeholder}
        inverted
        color={color || 'violet'}
        textAlign="center"
      >
        <Header style={styles.header} icon>
          <Icon>
            <Image
              size="small"
              circular
              style={{ margin: 'auto', border: '10px solid white' }}
              src={imageSrc}
            />
            {/* <ImageUploader placeholder={} type="Logo" aspectRatio={4 / 4}></ImageUploader> */}
          </Icon>
          {user.username}
          <Header.Subheader style={{ color: 'white' }}>
            {user.email}
          </Header.Subheader>
          <Header.Subheader style={{ color: 'white' }}>
            <strong>Joined:</strong> <em>{user.creationDate}</em>
          </Header.Subheader>

          <Segment basic style={{ padding: 0, color: 'white' }}>
            <Header
              style={{ color: 'white', margin: 'auto 20px' }}
              as="h2"
              floated="left"
            >
              {user.numberOfFollowers}
              <Header.Subheader style={{ color: 'white' }}>
                Followers
              </Header.Subheader>
            </Header>
            <Header
              style={{ color: 'white', margin: 'auto 20px' }}
              as="h2"
              floated="right"
            >
              {user.numberOfFollowing}
              <Header.Subheader style={{ color: 'white' }}>
                Followings
              </Header.Subheader>
            </Header>
          </Segment>
        </Header>
      </Segment>
    </>
  );
};

export default UserInfoBoard;

const styles = {
  container: {
    paddingTop: '70px'
  },
  placeholder: {
    padding: '20px 0'
  },
  header: {
    margin: 0
  }
};
