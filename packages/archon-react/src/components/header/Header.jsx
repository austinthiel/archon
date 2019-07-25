import './Header.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <div styleName='nav_bar'>
        <ul>
          <li>
            {' '}
            <Link to='/'>Juggle SF</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
