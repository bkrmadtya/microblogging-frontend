import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Menu, Image, Segment, Header, Icon } from "semantic-ui-react";

import { logout } from "../store/actions/authActions";

const SideNav = ({ user, logout }) => {
  const history = useHistory();
  const location = useLocation();

  const navigateTo = path => {
    history.push(`${location.pathname}/${path}`);
  };

  const imageSrc =
    "https://react.semantic-ui.com/images/avatar/large/molly.png";

  return (
    <>
      <Menu fluid inverted color="violet" size="small" vertical>
        {/* <Input icon="search" placeholder="Search anything..." /> */}
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
            navigateTo("profile");
          }}
        >
          <Icon name="user" />
          Profile
        </Menu.Item>

        <Menu.Item
          as="a"
          name="setting"
          onClick={() => {
            navigateTo("setting");
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
