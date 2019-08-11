import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
  const { href, children, newTab } = props;

  const anchorProps = {
    href,
    rel: 'noreferrer noopener',
  };

  if (newTab) {
    anchorProps.target = '_blank';
  }

  return <a {...anchorProps}>{children}</a>;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  newTab: PropTypes.bool,
};

export default Link;
