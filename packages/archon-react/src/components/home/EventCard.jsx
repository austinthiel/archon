import './EventCard.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, Spacer } from '../shared';

export default class EventCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { title, description } = this.props;

    return (
      <div styleName='card'>
        <div styleName='description'>
          <Text type='subheader'>{title}</Text>
          <Spacer size={15} />
          <Text>{description}</Text>
        </div>
      </div>
    );
  }
}
