import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupModal from './SignupModal';

const MODAL_COMPONENTS = {
  SIGN_UP: SignupModal,
  // LOG_IN: LoginModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
};

export default connect(state => state.modal)(ModalRoot);
