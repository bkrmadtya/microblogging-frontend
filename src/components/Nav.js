import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Icon, Input, Menu, Dropdown, Container } from "semantic-ui-react";

import { logout } from "../store/actions/authActions";

const Nav = ({ user, children, logout }) => {
  const history = useHistory();
  // const location = useLocation();

  const navigateTo = path => {
    history.push(path);
  };

  return (
    <>
      <Menu size="large" fixed="top" fluid borderless>
        <Container>
          <Menu.Item
            onClick={() => {
              navigateTo("/");
            }}
          >
            <Icon name="twitter" color="blue" />
            Microblogging
          </Menu.Item>

          {children}

          <Menu.Menu position="right">
            <Dropdown direction="left" icon="user" floating item>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    // navigateTo("/profile");
                  }}
                >
                  User profile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    // logout();
                    // navigateTo("/setting");
                  }}
                >
                  Setting
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    logout();
                    history.push("/login");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { logout })(Nav);
