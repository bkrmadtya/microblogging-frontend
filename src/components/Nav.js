import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Icon, Input, Menu, Dropdown, Container } from "semantic-ui-react";

import { logout } from "../store/actions/authActions";

const Nav = ({ children, logout }) => {
  const history = useHistory();

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
                    logout();
                    navigateTo("/login");
                  }}
                >
                  User profile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    logout();
                    navigateTo("/login");
                  }}
                >
                  Setting
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    logout();
                    navigateTo("/login");
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

export default connect(null, { logout })(Nav);
