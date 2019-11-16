import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import FlexContainer from '../shared/FlexContainer';
import HorizontalSpacer from '../shared/HorizontalSpacer';
import { showModal } from '../../actions/modalAction';

function mapDispatchToProps(dispatch) {
  return {
    openSignupModal: modalProps =>
      dispatch(showModal({ modalType: 'SIGN_UP', modalProps })),
  };
}

const Header = props => {
  const { openSignupModal } = props;

  return (
    <div
      css={css`
        background-color: rgb(39, 39, 39);
        height: 42px;
      `}
    >
      <FlexContainer alignItems='center'>
        <Link to='/'>dev_null</Link>

        <HorizontalSpacer size='20' />

        <Link to='/events'>Projects</Link>

        <HorizontalSpacer size='20' />

        <Link to='/gallery'>GitHub</Link>

        <HorizontalSpacer size='20' />

        <Link to='/contact'>Contact</Link>

        <HorizontalSpacer size='20' />

        <a
          className='dbox-donation-button custom-dbox-popup'
          href='https://donorbox.org/dev_null'
        >
          Donate
        </a>

        <HorizontalSpacer size='20' />

        <div onClick={() => openSignupModal()}>Sign Up</div>
      </FlexContainer>
    </div>
  );
};

Header.propTypes = {
  openSignupModal: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
