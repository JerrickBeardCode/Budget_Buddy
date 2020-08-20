import React from 'react';

// Function for handling form submit is passed as a prop from Modal.js

// handleForm: callback function to handle form's onSubmit
// modal_body: the text before the input in the modal's body
// onLabelKeyPress: callback function to handle when a key is pressed during input (usually 'Enter' key)
const InputForm = ({ handleForm, modal_body, onLabelKeyPress }) => {
  return (
    <>
      <form id="input-form" onSubmit={handleForm}>
        <label>{`${modal_body} `}</label>
        <input
          type="text"
          id="amount"
          name="amount"
          onKeyPress={onLabelKeyPress}
        ></input>
      </form>
    </>
  );
};

export default InputForm;
