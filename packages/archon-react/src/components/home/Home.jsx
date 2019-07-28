import './Home.scss';

import React, { Component } from 'react';
import rp from 'request-promise-native';

import { Page, Text, Button } from '../shared';
import EventCard from './EventCard.jsx';

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
        <Text type='title'>Juggling Meetups</Text>
        <div style={{ textAlign: 'center' }}>
          Join our email list to get notified about impromptu juggling meetups
          in the city!
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              onChange={this.handleChange}
              placeholder='email'
              value={emailAddress}
            />
            <br />
            <Button>Submit</Button>
          </form>
        </div>
        <EventCard
          id='mymap2'
          title='Circus Center'
          description='meets every Sunday from 5pm-8pm'
          locationCoordinates={{ lat: 37.7655, lng: -122.457 }}
        />

        <EventCard
          id='mymap1'
          title='Circus Connections'
          description='meets every Monday from 7pm-10pm'
          locationCoordinates={{ lat: 37.7655, lng: -122.457 }}
        />
      </Page>
    );
  }
}
