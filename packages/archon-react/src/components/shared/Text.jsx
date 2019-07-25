import './Text.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Text extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
  };

  render() {
    const { type, children } = this.props;

    return <div styleName={type}>{children}</div>;
  }
}

export class Title1 extends Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    const { children } = this.props;

    return <Text type='title-1'>{children}</Text>;
  }
}

export class Title2 extends Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    const { children } = this.props;

    return <Text type='title-2'>{children}</Text>;
  }
}

export class Body extends Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    const { children } = this.props;

    return <Text type='body'>{children}</Text>;
  }
}
