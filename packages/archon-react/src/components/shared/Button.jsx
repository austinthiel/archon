import './Button.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { size, color, type, children, onClick } = props;

  return (
    <button onClick={onClick} styleName={`${size}_${color}_${type}`}>
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
  onClick: PropTypes.func, // not required if being used in a form
};

export default Button;
