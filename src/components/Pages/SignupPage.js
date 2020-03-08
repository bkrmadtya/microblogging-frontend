import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from 'semantic-ui-react';

import { signup } from '../../store/actions/authActions';

const styles = {
  color: 'blue',

  buttonLink: {
    color: 'blue',
    background: 'none',
    padding: 0,
    fontWeight: 100
  }
};

const SignupPage = ({ auth, signup }) => {
  const history = useHistory();

  const navigateTo = path => {
    history.push(path);
  };

  useEffect(() => {
    if (auth.user) {
      navigateTo('/wall');
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = e.target;

    const user = {
      username: username.value,
      email: email.value,
      password: password.value
    };

    signup(user);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        {auth.error && <Message error>{auth.error}</Message>}
        <Header color={styles.color} content="Microblogging" as="h1" />
        <Header color={styles.color} icon>
          <Icon name="twitter" />
          <Header.Content>
            Sign Up
            <Header.Subheader>Way to Microblogging</Header.Subheader>
          </Header.Content>
        </Header>

        <Form size="mini" onSubmit={handleSubmit}>
          <Segment basic>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Your username"
              required
            />
            <Form.Input
              fluid
              name="email"
              icon="at"
              iconPosition="left"
              placeholder="E-mail address"
              required
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required
            />

            <Button color={styles.color} fluid size="large" type="submit">
              Sign Up
            </Button>

            <Message>
              Already registered?{' '}
              <Button
                style={styles.buttonLink}
                onClick={() => navigateTo('/login')}
              >
                Log In
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

export default connect(mapStateToProps, { signup })(SignupPage);
