import './EventCard.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Map, Text } from '../shared';

export default class EventCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    locationCoordinates: PropTypes.objectOf(PropTypes.number),
  };

  render() {
    const { title, description, locationCoordinates } = this.props;

    return (
      // <div styleName='box' />
      <div styleName='card'>
        <div styleName='description'>
          <Text type='subheader'>{title}</Text>
          <Text>Description: {description}</Text>
        </div>
        {/* <div styleName='map'>
          <Map
            id={this.props.id}
            options={{
              center: { lat: 41.0082, lng: 28.9784 },
              zoom: 8,
            }}
            onMapLoad={map => {
              new window.google.maps.Marker({
                position: { lat: 41.0082, lng: 28.9784 },
                map: map,
                title: 'Hello Istanbul!',
              });
            }}
          />
        </div> */}
      </div>
    );
  }
}
