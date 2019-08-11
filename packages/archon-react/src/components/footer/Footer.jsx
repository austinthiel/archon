import * as styles from './FooterStyles';

import React, { Component } from 'react';
import { Text, Link } from '../shared';

export default class Footer extends Component {
  render() {
    return (
      <div css={styles.container}>
        <div css={styles.footer}>
          <Text color='white' type='tag'>
            Made with 🤔 by{' '}
            <Link href='https://github.com/austinthiel' newTab>
              Austin Thiel
            </Link>
          </Text>
        </div>
      </div>
    );
  }
}
