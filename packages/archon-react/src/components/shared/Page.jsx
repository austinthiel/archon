import './Page.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div styleName='container'>{children}</div>;
  }
}