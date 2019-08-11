import React, { Component } from 'react';
import { Page, Text, Link } from '../shared';

export default class Contact extends Component {
  render() {
    return (
      <Page>
        <Text>
          For questions and inquiries, email{' '}
          <Link href='mailto:info@jugglesf.com'>info@jugglesf.com</Link>.
        </Text>
      </Page>
    );
  }
}
