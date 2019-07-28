import './Text.scss';

import React from 'react';
import PropTypes from 'prop-types';

const sharedPropTypes = {
  type: PropTypes.oneOf(['title', 'subtitle', 'body', 'tag']),
  children: PropTypes.string.isRequired,
};

export const InlineText = props => {
  const { type, children } = props;

  return <span styleName={type}>{children}</span>;
};

InlineText.propTypes = sharedPropTypes;

export const Text = props => {
  const { type, children } = props;

  return <div styleName={type}>{children}</div>;
};

Text.propTypes = sharedPropTypes;
