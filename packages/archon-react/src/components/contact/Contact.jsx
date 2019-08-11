import React from 'react';
import { Page, Text, Link } from '../shared';

const Contact = () => {
  return (
    <Page>
      <Text>
        For questions and inquiries, email{' '}
        <Link href='mailto:info@jugglesf.com'>info@jugglesf.com</Link>.
      </Text>
    </Page>
  );
};

export default Contact;
