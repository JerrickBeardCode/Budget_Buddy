import React from 'react';
//import ReactDOM from 'react-dom';

// Function for handling form submit is passed as a prop from Modal.js

///// PROPS /////

// handleForm: callback function to handle form's onSubmit
// modal_body: the text before the input in the modal's body
// onLabelKeyPress: callback function to handle when a key is pressed during input (usually 'Enter' key)

class InputForm extends React.Component {
  state = {
    amount: null, // Amount of transaction
    title: '', // Transaction title,
    transaction_id: -1, // Unique id for each transaction, starting value arbitrary
    non_number_attempt: false // True if user tries to enter a non-number for 'amount' field
  };

  handleAmountChange = e => {
    // Validate input: don't let user enter a non-number
    if (isNaN(e.target.value)) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
      this.setState({ non_number_attempt: true });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleTitleChange = e => {
    // Validate input: max length of 30 characters
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  // Handles key press. If 'enter' key was hit, call onLabelKeyPress and pass
  // it the current state object pair {amount, title}
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onLabelKeyPress(this.state);
    }
  };

  // Handles confirm button click. Need to call props function while passing
  // the current state data
  handleConfirmClick = () => {
    this.props.btnConfirmClicked(this.state);
  };

  render() {
    // Destructure props
    const { handleForm, modal_body, btnCancelClicked } = this.props;

    return (
      <>
        <form id="input-form" onSubmit={handleForm}>
          <label>{`${modal_body} `}</label>
          <input
            type="text"
            id="transaction-amount"
            name="amount"
            placeholder="Amount"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleAmountChange}
          ></input>
          <input
            type="text"
            id="transaction-title"
            name="title"
            placeholder="Description"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleTitleChange}
          ></input>
        </form>
        <button className="btn btn-confirm" onClick={this.handleConfirmClick}>
          Confirm
        </button>
        <button className="btn btn-cancel" onClick={btnCancelClicked}>
          Cancel
        </button>
        {this.state.non_number_attempt ? (
          <p className="modal-amount-error">
            Please only enter numbers or decimals for amount
          </p>
        ) : null}
      </>
    );
  }
}

export default InputForm;
