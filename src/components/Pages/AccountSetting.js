import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Message,
  Checkbox,
  Form,
  Segment,
  Icon,
  Image,
  Button
} from 'semantic-ui-react';

import Nav from '../Nav';
import Notification from '../Notification';
import UserBar from '../UserBar';

import { updatePassword, updatePrivacy } from '../../store/actions/userActions';

const AccountSetting = ({ user, updatePassword, updatePrivacy }) => {
  const [oldPass1, setOldPass1] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const profileIsPrivate = user.private;

  const privacyStatus = profileIsPrivate ? 'Private' : 'Public';
  const alterPrivacyStatus = !profileIsPrivate ? 'Private' : 'Public';

  console.log(user);

  const newPasswordMatches =
    newPassword1.trim() === newPassword.trim() &&
    newPassword1.length > 0 &&
    newPassword.length > 0;

  const buttonDisabled = newPasswordMatches && newPassword.length !== 0;

  const handleUpdatePassword = e => {
    e.preventDefault();
    updatePassword({ oldPassword: oldPass1, newPassword }, user.userId);

    setOldPass1('');
    setNewPassword1('');
    setNewPassword('');
  };

  const accentColor = profileIsPrivate ? 'red' : 'green';

  const handleUpdatePrivacy = user => {
    updatePrivacy(user);
  };

  return (
    <>
      <Nav />
      <Container style={styles.container}>
        <Notification />

        <UserBar user={user} privacyStatus={privacyStatus} />

        <Header textAlign="center" as="h2">
          Account settings
        </Header>

        <Segment attached secondary color={accentColor} clearing>
          <Header as="h4" floated="left" style={{ margin: 0 }}>
            Update Privacy
          </Header>

          <Segment floated="right" style={{ margin: 0, padding: 0 }} basic>
            <Checkbox
              checked={profileIsPrivate}
              color={accentColor}
              onChange={(e, data) => {
                handleUpdatePrivacy(user);
              }}
              slider
              label={`Make profile ${alterPrivacyStatus}`}
            />
          </Segment>
        </Segment>

        <Segment attached="bottom" secondary>
          <Header as="h4">Update Password</Header>
          <Form size="small">
            <Form.Input
              name="oldPass1"
              value={oldPass1}
              label="Old Password"
              onChange={e => {
                setOldPass1(e.target.value);
              }}
            />
            <Form.Input
              name="newPassword1"
              value={newPassword}
              label="New Password"
              onChange={e => {
                setNewPassword(e.target.value);
              }}
            />
            <Form.Input
              name="newPassword"
              value={newPassword1}
              label="Repeat New Password"
              onChange={e => {
                setNewPassword1(e.target.value);
              }}
              error={!newPasswordMatches && newPassword1.trim().length > 0}
            />
            <Button
              primary
              disabled={!buttonDisabled}
              onClick={handleUpdatePassword}
              size="tiny"
            >
              Update password
            </Button>
          </Form>
        </Segment>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { updatePassword, updatePrivacy })(
  AccountSetting
);

const styles = {
  container: {
    paddingTop: '70px'
  }
};
