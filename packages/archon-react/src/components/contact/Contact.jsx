import './Contact.scss';

import React, { Component } from 'react';
import { Page } from '../shared';

export default class Contact extends Component {
  render() {
    return (
      <Page>
        <p>
          I can be reached via email at{' '}
          <a href='mailto:hello@austinthiel.com'>hello@austinthiel.com</a>. I do
          my best to respond to everyone!
        </p>
      </Page>
    );
  }
}
