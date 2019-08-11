import * as styles from './FooterStyles';

import React from 'react';
import { Text, Link } from '../shared';

const Footer = () => {
  return (
    <div css={styles.container}>
      <div css={styles.footer}>
        <Text color='white' type='tag'>
          Made with 🤔 by{' '}
          <Link href='http://austinthiel.com/' newTab>
            Austin Thiel
          </Link>
        </Text>
      </div>
    </div>
  );
};
export default Footer;
