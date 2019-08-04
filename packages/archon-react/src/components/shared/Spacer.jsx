import './Spacer.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Spacer = props => {
  const { size } = props;

  return <div styleName={`size_${size}`} />;
};

Spacer.propTypes = {
  size: PropTypes.oneOf(['10', '20']).isRequired,
};

export default Spacer;
