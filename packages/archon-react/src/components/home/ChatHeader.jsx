import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { FlexContainer, FlexSpacer } from '../shared';

const ChatHeader = props => {
  const { switchChatSide, closeChat } = props;

  return (
    <div
      css={css`
        padding: 5px;
        background-color: #18181b;
        color: #eee;
      `}
    >
      <FlexContainer alignItems='center'>
        <i
          css={css`
            cursor: pointer;
          `}
          onClick={switchChatSide}
          className='material-icons'
        >
          swap_horiz
        </i>

        <FlexSpacer />

        <i
          css={css`
            cursor: pointer;
          `}
          onClick={closeChat}
          className='material-icons'
        >
          close
        </i>
      </FlexContainer>
    </div>
  );
};

ChatHeader.propTypes = {
  closeChat: PropTypes.func,
  switchChatSide: PropTypes.func,
};

export default ChatHeader;
