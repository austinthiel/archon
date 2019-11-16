import React from 'react';
import { css } from '@emotion/core';

import ChatTextbox from './ChatTextbox';

const ChatFooter = () => {
  return (
    <div
      css={css`
        height: 100px;
        padding: 0.6em;
        background-color: #18181b;
      `}
    >
      <ChatTextbox />
    </div>
  );
};

export default ChatFooter;
