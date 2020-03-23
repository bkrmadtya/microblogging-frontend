import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Message,
  Checkbox,
  Form,
  Icon,
  Image,
  Button
} from 'semantic-ui-react';

import Nav from '../Nav';
import Notification from '../Notification';
import UserInfoBoard from '../UserInfoBoard';

import { updatePassword, updatePrivacy } from '../../store/actions/userActions';

const AccountSetting = ({ user, updatePassword, updatePrivacy }) => {
  const [oldPass1, setOldPass1] = useState('');
  const [oldPass2, setOldPass2] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const profileIsPrivate = user.private;

  const privacyStatus = profileIsPrivate ? 'Private' : 'Public';
  const alterPrivacyStatus = !profileIsPrivate ? 'Private' : 'Public';

  console.log(user);

  const oldPasswordMatches =
    oldPass1.trim() === oldPass2.trim() &&
    oldPass1.length > 0 &&
    oldPass2.length > 0;

  const buttonDisabled = oldPasswordMatches && newPassword.length !== 0;

  const handleUpdatePassword = e => {
    e.preventDefault();
    updatePassword({ oldPassword: oldPass1, newPassword }, user.userId);

    setOldPass1('');
    setOldPass2('');
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

        <UserInfoBoard user={user} color={accentColor} />

        <Message color={accentColor}>
          Profile status: <strong> {privacyStatus}</strong>
        </Message>

        <Checkbox
          checked={profileIsPrivate}
          onChange={(e, data) => {
            // setProfileIsPrivate(data.checked);
            handleUpdatePrivacy(user);
          }}
          toggle
          label={`Make profile ${alterPrivacyStatus}`}
        />

        <Header>Account Settings</Header>

        <Form>
          <Form.Input
            name="oldPass1"
            value={oldPass1}
            label="Old Password"
            onChange={e => {
              setOldPass1(e.target.value);
            }}
            error={!oldPasswordMatches && oldPass1.trim().length > 0}
          />
          <Form.Input
            name="oldPass2"
            value={oldPass2}
            label="Repeat Old Password"
            onChange={e => {
              setOldPass2(e.target.value);
            }}
            error={!oldPasswordMatches && oldPass2.trim().length > 0}
          />
          <Form.Input
            name="newPassword"
            value={newPassword}
            label="New Password"
            onChange={e => {
              setNewPassword(e.target.value);
            }}
          />
          <Button
            primary
            disabled={!buttonDisabled}
            onClick={handleUpdatePassword}
          >
            Update password
          </Button>
        </Form>

        <Form></Form>
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
  },
  placeholder: {
    padding: '30px 0'
  }
};
