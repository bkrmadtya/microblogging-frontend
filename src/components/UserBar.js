import React from 'react';
import {
  Segment,
  Label,
  Item,
  Checkbox,
  Icon,
  Image,
  Header,
  List
} from 'semantic-ui-react';

import ImageUploader from './utils/Image Uploader/ImageUploader';

const UserBar = ({ user, privacyStatus }) => {
  const imageSrc =
    'https://react.semantic-ui.com/images/avatar/large/molly.png';

  const accentColor = user.private ? 'red' : 'green';
  const alterPrivacyStatus = !user.private ? 'Private' : 'Public';

  return (
    <>
      <Segment
        raised
        color={accentColor}
        secondary
        style={styles.container}
        clearing
      >
        <Label color={accentColor} attached="bottom">
          {privacyStatus}
          <Label.Detail>
            {user.private
              ? 'Your profile is only visible logged in users.'
              : 'Your profile is visible to anonymous users too.'}
          </Label.Detail>
        </Label>
        <Item.Group divided unstackable>
          <Item>
            <Image style={styles.avatar} size="small" src={imageSrc} />

            <Item.Content verticalAlign="middle">
              <Item.Header as="a" style={styles.header}>
                {user.username}
              </Item.Header>
              <Item.Description style={styles.desc}>
                {user.email}
              </Item.Description>
              <Item.Extra style={styles.desc}>
                {user.creationDate} (Joined)
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  );
};

export default UserBar;

const styles = {
  container: {
    border: 'none'
  },
  header: {
    color: 'inherit',
    fontSize: '2em',
    fontWeight: 100,
    margin: '15px 0'
  },
  desc: { color: 'inherit', opacity: 0.7, margin: 0 },
  avatar: {
    border: '8px solid white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)'
  }
};
