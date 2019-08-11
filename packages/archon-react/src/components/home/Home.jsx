import './Home.scss';

import React, { Component } from 'react';
import rp from 'request-promise-native';

import { Page, Text, Button, Spacer } from '../shared';
import EventCard from './EventCard';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
    };
  }

  handleChange = e => {
    this.setState({
      emailAddress: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { emailAddress } = this.state;

    const options = {
      uri: 'http://localhost:3000/mailingList/subscribe',
      json: true,
      body: {
        emailAddress,
      },
    };

    await rp.post(options);

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      emailAddress: '',
    });
  };

  render() {
    const { emailAddress } = this.state;

    return (
      <Page>
        <Text type='header'>Juggling Meetups</Text>
        <Spacer size={20} />
        <EventCard
          id='mymap2'
          title='Circus Center'
          description='Meets every Sunday from 5pm-8pm'
        />

        <EventCard
          id='mymap1'
          title='Circus Connections'
          description='Meets every Monday from 7pm-10pm'
        />

        <Spacer size={40} />

        <div style={{ textAlign: 'center' }}>
          <Text>
            Join our email list to get notified about impromptu juggling meetups
            in the city!
          </Text>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              onChange={this.handleChange}
              placeholder='email'
              value={emailAddress}
            />
            <Spacer size={10} />
            <Button color='blue'>Submit</Button>
          </form>
        </div>
      </Page>
    );
  }
}
