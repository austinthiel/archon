import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const FlexItem = props => {
  const { style, color, children, flexGrow, alignSelf } = props;

  const flexItem = css`
    ${style};
    ${alignSelf && `align-self: ${alignSelf};`}
    flex-grow: ${flexGrow};
    background-color: ${color};
  `;

  return <div css={flexItem}>{children}</div>;
};

FlexItem.defaultProps = {
  flexGrow: 1,
};

FlexItem.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.node,
  flexGrow: PropTypes.number,
  alignSelf: PropTypes.oneOf([
    'flexStart',
    'flexEnd',
    'center',
    'baseline',
    'stretch',
  ]),
};

export default FlexItem;
