import React from 'react';

const StreamPanel = () => {
  return (
    <iframe
      src='https://player.twitch.tv/?channel=dev_null'
      height='100%'
      width='100%'
      frameBorder='0'
      scrolling='no'
      allowFullScreen={true}
    />
  );
};

export default StreamPanel;
