import React from "react";
import { useHistory } from "react-router-dom";
import { Label, Input, Menu } from "semantic-ui-react";

const SideNav = ({ user }) => {
  const history = useHistory();

  const navigateTo = path => {
    history.push(path);
  };

  return (
    <>
      <Menu fluid inverted color="blue" size="small" vertical>
        <Menu.Item as="h4" style={{ margin: 0 }}>
          Welcome, <strong>{user.username}</strong>!
        </Menu.Item>

        <Menu.Item>
          <Input icon="search" placeholder="Search anything..." />
        </Menu.Item>

        <Menu.Item name="inbox">
          <Label color="teal">1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name="sent">
          <Label color="red">51</Label>
          Sent
        </Menu.Item>

        <Menu.Item name="updates">
          <Label color="teal">1</Label>
          Updates
        </Menu.Item>

        <Menu.Item name="inbox">
          <Label color="teal">1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name="spam">
          <Label color="teal">51</Label>
          Spam
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SideNav;
