import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const colors = [
  'red',
  'blue',
  'green',
  'firebrick',
  'coral',
  'yellowgreen',
  'orangered',
  'seagreen',
  'goldenrod',
  'chocolate',
  'cadetblue',
  'dodgerblue',
  'hotpink',
  'blueviolet',
  'springgreen',
];

const ChatMessage = props => {
  const { message } = props;

  return (
    <div
      css={css`
        background-color: #18181b;
        font-family: monospace;
        font-size: 16px;
        padding: 7px 10px;
      `}
    >
      <span
        css={css`
          color: ${colors[Math.floor(Math.random() * colors.length)]};
          font-weight: bold;
        `}
      >
        {message.username}
      </span>
      <span
        css={css`
          color: white;
        `}
      >
        : {message.body}
      </span>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object,
};

export default ChatMessage;
