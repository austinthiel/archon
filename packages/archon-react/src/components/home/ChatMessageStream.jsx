import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ChatMessage from './ChatMessage';
import { FlexItem } from '../shared';

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
  };
};

const ChatMessageStream = props => {
  const { messages } = props;

  const mostRecentMessages = messages.slice(-150);

  useEffect(() => {
    var element = document.getElementById('hmmm');
    element.scrollTop = element.scrollHeight;
  });

  return (
    <div
      id='hmmm'
      css={css`
        overflow: auto;
        height: 100%;
        background-color: #18181b;

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #18181b;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}
    >
      <FlexItem>
        {mostRecentMessages.map(message => (
          <ChatMessage message={message} />
        ))}
      </FlexItem>
    </div>
  );
};

ChatMessageStream.propTypes = {
  messages: PropTypes.array,
};

export default connect(mapStateToProps)(ChatMessageStream);
