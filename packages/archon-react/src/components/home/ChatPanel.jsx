import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as styles from './ChatPanelStyles';

import ChatFooter from './ChatFooter';
import ChatMessageStream from './ChatMessageStream';
import ChatHeader from './ChatHeader';

import { FlexContainer } from '../shared';

const ChatPanel = props => {
  const { switchChatSide, closeChat } = props;

  return (
    <div css={styles.chatPanel}>
      <FlexContainer flexDirection='column'>
        <ChatHeader switchChatSide={switchChatSide} closeChat={closeChat} />
        <ChatMessageStream />
        <ChatFooter />
      </FlexContainer>
    </div>
  );
};

ChatPanel.propTypes = {
  closeChat: PropTypes.func,
  switchChatSide: PropTypes.func,
};

export default ChatPanel;
