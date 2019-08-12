import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { FlexContainer, Text, HorizontalSpacer } from '../shared';

const Image = props => {
  const imageContainer = css`
    width: 700px;
    height: 500px;
    border-radius: 3px;
    overflow: hidden;
  `;

  const container = css`
    margin: 10px;
  `;

  return (
    <div css={container}>
      <FlexContainer>
        <div css={imageContainer}>
          <img src='https://i.imgur.com/QKfpKO1.jpg' />
        </div>
        <HorizontalSpacer size={20} />
        <Text>yo</Text>
      </FlexContainer>
    </div>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
