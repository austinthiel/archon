import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from '@emotion/core';

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch({ type: 'SEND_MESSAGE', message }),
  };
};

const ChatTextbox = props => {
  const { sendMessage } = props;

  const [textboxValue, setTextboxValue] = useState('');

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      onSubmit(e);
    }
  };

  const onSubmit = e => {
    if (!e.target.value.trim()) {
      return;
    }

    setTextboxValue('');

    const messagePayload = {
      username: 'testUser',
      body: e.target.value,
    };

    sendMessage(messagePayload);
  };

  return (
    <textarea
      css={css`
        height: 70px;
        box-sizing: border-box;
        width: 100%;
        resize: none;
        background: rgb(255, 255, 255, 0.15);
        border: 1px solid #222;
        color: #b9b9b9;
        border-radius: 4px;
        padding: 0.6em;

        &:focus {
          outline: 2px solid #772ce8;
          transition-duration: 300ms;
          background: black;
        }
      `}
      placeholder='Write something...'
      autoFocus
      spellCheck
      autoComplete='off'
      tabIndex='1'
      value={textboxValue}
      onChange={e => setTextboxValue(e.target.value)}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
    />
  );
};

ChatTextbox.propTypes = {
  sendMessage: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps
)(ChatTextbox);
