import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideModal } from '../../actions/modalAction';
import Modal from 'react-modal';
import SignupForm from '../form/SignupForm';

function mapDispatchToProps(dispatch) {
  return {
    onHideModal: () => dispatch(hideModal()),
  };
}

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
};

const SignupModal = props => {
  const { onHideModal } = props;

  return (
    <Modal
      ariaHideApp={false}
      isOpen={true}
      onRequestClose={onHideModal}
      contentLabel='Example Modal'
      style={customStyles}
    >
      <SignupForm />
    </Modal>
  );
};

SignupModal.propTypes = {
  onHideModal: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps
)(SignupModal);
