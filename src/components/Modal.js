import React, { useRef, useEffect } from 'react';
import InputForm from './InputForm';
import DeleteForm from './DeleteForm';

/* PROPS:
  closeModal - callback for closing 
  modal_header - header text for modal
  modal_body - body text for modal
  modal_type - type of child component Modal should generate (InputForm, DeleteEntry, etc)
  onConfirmButtonClick - callback for confirm button's onClick
*/

const Modal = ({
  closeModal,
  modal_header,
  modal_body,
  modal_type,
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

  // InputForm calls this function if 'enter' key is pressed.
  // Receives object to be put in an array
  const onLabelKeyPress = obj => {
    onConfirmButtonClick(obj);
  };

  // Pass up data when confirm button is clicked
  const btnConfirmClicked = obj => {
    onConfirmButtonClick(obj);
  };

  // If cancel button is clicked, we close the modal.
  const btnCancelClicked = () => {
    closeModal(); // Callback
  };

  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className={`modal-container ${modal_type}`}>
      <div className="modal-content-container">
        <div ref={area} className="modal-content">
          <div className="modal-header">{modal_header}</div>

          {/*Note: you can add another IIFE and pass props for any type of modal you need*/}
          {(() => {
            if (modal_type === 'input-form') {
              return (
                <InputForm
                  handleForm={handleForm}
                  modal_body={modal_body}
                  onLabelKeyPress={onLabelKeyPress}
                  btnConfirmClicked={btnConfirmClicked}
                  btnCancelClicked={btnCancelClicked}
                />
              );
            } else {
              return null;
            }
          })()}

          {(() => {
            if (modal_type === 'delete-form') {
              return (
                <DeleteForm
                  modal_body={modal_body}
                  btnConfirmClicked={btnConfirmClicked}
                  btnCancelClicked={btnCancelClicked}
                />
              );
            } else {
              return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
