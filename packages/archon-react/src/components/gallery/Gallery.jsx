import React from 'react';
import { Page, FlexContainer } from '../shared';
import Image from './Image';

const Gallery = () => {
  return (
    <Page>
      <div>Gallery</div>
      <FlexContainer flexWrap='wrap'>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </FlexContainer>
    </Page>
  );
};

export default Gallery;
