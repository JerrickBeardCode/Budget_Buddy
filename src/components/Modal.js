import React, { useRef, useEffect } from 'react';
import InputForm from './InputForm';

const Modal = ({
  closeModal,
  modal_header,
  modal_body,
  onConfirmButtonClick
}) => {
  const area = useRef(); // Linked to ref in model container

  const handleClick = e => {
    // Click inside of the modal
    if (area.current.contains(e.target)) {
      return;
    }

    // Else, it is an outside click. Use callback function to toggle modal to off
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  //////////// Handling form logic for entering an income or expense ///////////
  const handleForm = e => {
    e.preventDefault();
  };

  // If enter is pressed while focused on input field, this function is called
  const onLabelKeyPress = e => {
    if (e.key === 'Enter') {
      onConfirmButtonClick(e.target.value);
    }
  };

  // If confirm button is clicked (or if the user hits enter),
  //we want to enter the current value into the appropriate transaction list. (done in above function)
  const btnConfirmClicked = () => {
    onConfirmButtonClick();
  };

  // If cancel button is clicked, we close the modal.
  const btnCancelClicked = () => {
    closeModal(); // Callback
  };

  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="modal-container">
      <div className="modal-content-container">
        <div ref={area} className="modal-content">
          <div className="modal-header">{modal_header}</div>
          <InputForm
            handleForm={handleForm}
            modal_body={modal_body}
            onLabelKeyPress={onLabelKeyPress}
          />
          <button className="btn btn-confirm" onClick={btnConfirmClicked}>
            Confirm
          </button>
          <button className="btn btn-cancel" onClick={btnCancelClicked}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
