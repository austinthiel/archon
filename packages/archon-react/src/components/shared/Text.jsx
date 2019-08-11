import { css } from '@emotion/core';
import { fonts, colors } from '../../scss';

import React from 'react';
import PropTypes from 'prop-types';

const colorMap = {
  black: colors.black,
  white: colors.white,
};

const Text = props => {
  const { type, color, inline, children } = props;

  const header = css`
    font-family: ${fonts.primary};
    font-weight: ${fonts.medium};
    font-size: 42px;
    color: ${colorMap[color]};
  `;

  const subheader = css`
    font-family: ${fonts.primary};
    font-weight: ${fonts.bold};
    font-size: 25px;
    color: ${colorMap[color]};
  `;

  const body = css`
    font-family: ${fonts.primary};
    font-weight: ${fonts.regular};
    font-size: 17px;
    color: ${colorMap[color]};
  `;

  const tag = css`
    font-family: ${fonts.primary};
    font-weight: ${fonts.regular};
    font-size: 14px;
    color: ${colorMap[color]};
  `;

  const typeMap = {
    header,
    subheader,
    body,
    tag,
  };

  const BlockType = inline ? 'span' : 'div';

  return <BlockType css={typeMap[type]}>{children}</BlockType>;
};

Text.propTypes = {
  type: PropTypes.oneOf(['header', 'subheader', 'body', 'tag']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['black', 'white']),
  inline: PropTypes.bool,
};

Text.defaultProps = {
  type: 'body',
  color: 'black',
  inline: false,
};

export default Text;
