import React from 'react';
import { Toast } from 'react-bootstrap';
import './Styles/ToastMessage.css';

const ToastMessage = ({
  show,
  onClose,
  // type = 'success',
  // message = 'Thank you for your response!',
}) => {
  return (
    show && (
      <div className="toast-container">
        <Toast onClose={onClose} show={true} delay={3000} autohide>
          <Toast.Header>
            {/* <strong className="me-auto">
              {type === 'success' ? 'Success!' : 'Error'}
            </strong> */}
          </Toast.Header>
          {/* <Toast.Body>{message}</Toast.Body> */}
        </Toast>
      </div>
    )
  );
};

export default ToastMessage;
