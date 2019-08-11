import * as styles from './FooterStyles';

import React, { Component } from 'react';
import { Text } from '../shared';

export default class Footer extends Component {
  render() {
    return (
      <div css={styles.container}>
        <div css={styles.footer}>
          <Text color='white' type='tag'>
            Made with 🤔 by Austin Thiel
          </Text>
        </div>
      </div>
    );
  }
}
