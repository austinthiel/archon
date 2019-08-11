import * as styles from './EventCardStyles';

import React from 'react';
import PropTypes from 'prop-types';

import { Text, Spacer } from '../shared';

const EventCard = props => {
  const { title, description, cost } = props;

  return (
    <div css={styles.card}>
      <div css={styles.description}>
        <Text type='subheader'>{title}</Text>
        <Spacer size={15} />
        <Text>{description}</Text>
        <Spacer size={15} />
        <Text>Cost: {cost}</Text>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.string,
};

export default EventCard;
