import './Contact.scss';

import React, { Component } from 'react';
import { Page, Text } from '../shared';

export default class Contact extends Component {
  render() {
    return (
      <Page>
        <Text>
          I can be reached via email at{' '}
          <a href='mailto:hello@austinthiel.com'>hello@austinthiel.com</a>. I do
          my best to respond to everyone!
        </Text>
      </Page>
    );
  }
}
