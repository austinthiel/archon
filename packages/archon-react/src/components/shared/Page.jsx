import { css } from '@emotion/core';

import React from 'react';
import PropTypes from 'prop-types';

const container = css`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 15px;
  font-family: 'ubuntu', sans-serif;
`;

const Page = props => {
  const { children } = props;
  return <div css={container}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
