import './Header.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div styleName='nav_bar'>
      <ul>
        <li>
          <Link to='/'>Juggle SF</Link>
        </li>
        <li>
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
};

export default Header;
