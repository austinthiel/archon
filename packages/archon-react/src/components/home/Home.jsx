import React, { useState } from 'react';
import Header from '../header/Header';

import { FlexContainer } from '../shared';
import StreamPanel from './StreamPanel';
import ChatPanel from './ChatPanel';

import * as styles from './HomeStyles';

const Home = () => {
  const [chatSide, setChatSide] = useState('right');
  const [chatClosed, setChatClosed] = useState(false);

  const switchChatSide = () => {
    setChatSide(chatSide === 'left' ? 'right' : 'left');
  };

  const closeChat = () => {
    setChatClosed(true);
  };

  const streamPanel = <StreamPanel key='stream-panel' />;
  const chatPanel = chatClosed ? null : (
    <ChatPanel switchChatSide={switchChatSide} closeChat={closeChat} />
  );

  return (
    <div css={styles.container}>
      <FlexContainer flexDirection='column'>
        <Header />

        <FlexContainer style={styles.streamWrapper}>
          {chatSide === 'right' ? (
            <>
              {streamPanel}
              {chatPanel}
            </>
          ) : (
            <>
              {chatPanel}
              {streamPanel}
            </>
          )}
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Home;
