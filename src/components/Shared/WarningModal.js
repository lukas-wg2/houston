import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const WarningModal = props => {
  return (
    <Modal isOpen={props.show} toggle={props.handleClose}>
      <ModalHeader toggle={props.handleClose}>{props.heading}</ModalHeader>
      <ModalBody>
        <p>
          {props.warningText}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.handleConfirm}>Yes</Button>{' '}
        <Button color="light" onClick={props.handleClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

WarningModal.propTypes = {
  show: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  warningText: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default WarningModal;
