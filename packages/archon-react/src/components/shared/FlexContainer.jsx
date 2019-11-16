import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const toKebabCase = string => {
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

const FlexContainer = props => {
  const {
    children,
    alignItems,
    justifyContent,
    flexDirection,
    alignContent,
    flexWrap,
    style,
  } = props;

  const flexStyle = css`
    ${style};
    display: flex;
    ${alignItems && `align-items: ${toKebabCase(alignItems)};`}
    ${justifyContent && `justify-content: ${toKebabCase(justifyContent)};`}
    ${flexDirection && `flex-direction: ${toKebabCase(flexDirection)};`}
    ${alignContent && `align-content: ${toKebabCase(alignContent)};`}
    ${flexWrap && `flex-wrap: ${toKebabCase(flexWrap)};`}
  `;
  return <div css={flexStyle}>{children}</div>;
};

FlexContainer.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.oneOf([
    'flexStart',
    'flexEnd',
    'center',
    'stretch',
    'baseline',
  ]),
  justifyContent: PropTypes.oneOf([
    'flexStart',
    'flexEnd',
    'center',
    'spaceBetween',
    'spaceAround',
    'spaceEvenly',
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'rowReverse',
    'column',
    'columnReverse',
  ]),
  alignContent: PropTypes.oneOf([
    'flexStart',
    'flexEnd',
    'center',
    'stretch',
    'spaceBetween',
    'spaceAround',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  style: PropTypes.object,
};

export default FlexContainer;
