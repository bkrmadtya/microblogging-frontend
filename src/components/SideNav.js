import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  Menu,
  Image,
  Segment,
  Header,
  Divider,
  Icon,
  Button
} from "semantic-ui-react";

import { logout } from "../store/actions/authActions";

const SideNav = ({ user, logout }) => {
  return (
    <>
      <Menu fluid inverted color="violet" size="small" vertical>
        {user ? (
          <MenuWithUserLoggedIn user={user} logout={logout} />
        ) : (
          <MenuWithOutUser />
        )}
      </Menu>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { logout })(SideNav);

const MenuWithUserLoggedIn = ({ user, logout }) => {
  const history = useHistory();
  const location = useLocation();

  const navigateTo = path => {
    history.push(`user/${path}`);
  };

  const imageSrc =
    "https://react.semantic-ui.com/images/avatar/large/molly.png";

  return (
    <>
      <Menu.Item>
        <Segment textAlign="center" basic>
          <Image
            style={{ margin: "auto", border: "5px solid white" }}
            size="small"
            circular
            bordered
            src={imageSrc}
          />
          <Header inverted> {user.username}</Header>
        </Segment>
      </Menu.Item>

      <Menu.Item
        as="a"
        name="profile"
        onClick={() => {
          navigateTo(user.username);
        }}
      >
        <Icon name="user" />
        Profile
      </Menu.Item>

      <Menu.Item
        as="a"
        name="setting"
        onClick={() => {
          navigateTo(user.username + "/setting");
        }}
      >
        <Icon name="setting" />
        Account Setting
      </Menu.Item>

      <Menu.Item
        as="a"
        name="logout"
        onClick={() => {
          history.push("/login");
          logout();
        }}
      >
        <Icon name="sign-out" />
        Log out
      </Menu.Item>
    </>
  );
};

const MenuWithOutUser = ({}) => {
  const history = useHistory();

  return (
    <Menu.Item>
      <Segment textAlign="center" basic>
        <Header as="h5" icon style={{ color: "white" }}>
          <Icon name="twitter"></Icon>
          <Header.Content>Log in to Microblogging</Header.Content>
          <Header.Subheader style={{ color: "white" }}>
            to view more details
          </Header.Subheader>
        </Header>
        <Divider />
        <Button
          content="Login"
          fluid
          size="mini"
          labelPosition="right"
          icon="twitter"
          primary
          onClick={() => {
            history.push("/login");
          }}
        />
      </Segment>
    </Menu.Item>
  );
};
