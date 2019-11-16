import { css } from '@emotion/core';

import React from 'react';
import PropTypes from 'prop-types';

const Spacer = props => {
  const { size } = props;

  return (
    <div
      css={css`
        padding-top: ${size}px;
      `}
    />
  );
};

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Spacer;
