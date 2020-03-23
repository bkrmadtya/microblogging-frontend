import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Message,
  Portal,
  Transition,
  TransitionablePortal
} from 'semantic-ui-react';

const Notification = ({ notification }) => {
  const [openPortal, setOpenPortal] = useState(false);

  useEffect(() => {
    setOpenPortal(notification ? true : false);
  }, [notification]);

  return (
    <>
      <TransitionablePortal open={openPortal} transition="fade down">
        <Message
          style={{
            width: '50%',
            left: '25%',
            right: '25%',
            position: 'fixed',
            top: '7%',
            zIndex: 1000
          }}
          onDismiss={() => setOpenPortal(false)}
          error={notification?.type === 'error'}
          success={notification?.type === 'success'}
        >
          <Message.Header>{notification?.message}</Message.Header>
        </Message>
      </TransitionablePortal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
