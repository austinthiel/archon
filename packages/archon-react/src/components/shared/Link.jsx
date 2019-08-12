import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Link = props => {
  const { href, children, newTab } = props;

  const anchorProps = {
    href,
    rel: 'noreferrer noopener',
  };

  if (newTab) {
    anchorProps.target = '_blank';
  }

  const linkStyle = css`
    color: cornflowerblue;

    &:visited {
      color: cornflowerBlue;
    }

    &:hover {
      color: skyblue;
    }

    &:active {
      color: skyblue;
    }
  `;

  return (
    <a css={linkStyle} {...anchorProps}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  newTab: PropTypes.bool,
};

export default Link;
