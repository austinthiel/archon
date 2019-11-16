import React from 'react';
import { css } from '@emotion/core';

const FlexSpacer = () => {
  const flexSpacer = css`
    flex-grow: 1;
  `;

  return <div css={flexSpacer} />;
};

export default FlexSpacer;
