import './Contact.scss';

import React, { Component } from 'react';
import { Page, Text } from '../shared';

export default class Contact extends Component {
  render() {
    return (
      <Page>
        <Text>
          For questions and inquiries, email{' '}
          <a href='mailto:info@jugglesf.com'>info@jugglesf.com</a>.
        </Text>
      </Page>
    );
  }
}
