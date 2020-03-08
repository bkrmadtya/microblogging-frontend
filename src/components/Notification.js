import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const Notification = ({ notification }) => {
  return (
    <>
      {notification && (
        <Message
          error={notification.type === 'error'}
          success={notification.type === 'success'}
        >
          {notification.message}
        </Message>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
