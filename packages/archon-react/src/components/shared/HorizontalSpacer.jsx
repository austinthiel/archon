import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const HorizontalSpacer = props => {
  const { size } = props;

  return (
    <div
      css={css`
        padding-right: ${size}px;
      `}
    />
  );
};

HorizontalSpacer.propTypes = {
  size: PropTypes.number.isRequired,
};

export default HorizontalSpacer;
