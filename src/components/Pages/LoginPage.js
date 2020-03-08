import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from 'semantic-ui-react';

import Notification from '../Notification';

import { login } from '../../store/actions/authActions';

const LoginPage = ({ auth, login }) => {
  const history = useHistory();

  const navigateTo = path => {
    history.push(path);
  };

  useEffect(() => {
    if (auth.user) {
      navigateTo(`/user/${auth.user.username}`);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;

    login({ email: email.value, password: password.value });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Notification />

        <Header color={styles.color} content="Microblogging" as="h1" />
        <Header color={styles.color} icon>
          <Icon name="twitter" />
          <Header.Content>
            Log In
            <Header.Subheader>Start Microblogging</Header.Subheader>
          </Header.Content>
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment basic>
            <Form.Input
              name="email"
              fluid
              // type="email"
              icon="at"
              iconPosition="left"
              placeholder="E-mail address"
              required
            />
            <Form.Input
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required
            />

            <Button
              color={styles.color}
              loading={auth.loading}
              fluid
              size="large"
              type="submit"
            >
              Login
            </Button>

            <Message>
              New to us?{' '}
              <Button
                style={styles.buttonLink}
                onClick={() => navigateTo('/signup')}
              >
                Sign Up
              </Button>
            </Message>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { login })(LoginPage);

const styles = {
  color: 'blue',
  buttonLink: {
    color: 'blue',
    background: 'none',
    padding: 0,
    fontWeight: 100
  }
};
