import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const baseButtonStyle = css`
  border: none;
  border-radius: 3px;
  color: white;
  padding: 8px 10px;
  height: 50px;
  width: 150px;
  font-size: 20px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const colorStyle = {
  blue: css`
    background-color: cornflowerblue;
    &:hover {
      background-color: skyblue;
    }
  `,
};

const Button = props => {
  const { size, color, type, children, onClick } = props;

  const buttonStyle = css`
    ${baseButtonStyle};
    ${colorStyle[color]};
  `;

  return (
    <button onClick={onClick} css={buttonStyle}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
  type: 'filled',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['red', 'blue', 'yellow']),
  type: PropTypes.oneOf(['ghost', 'wire', 'filled']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func, // not required if being used as a submit button in a form
};

export default Button;
