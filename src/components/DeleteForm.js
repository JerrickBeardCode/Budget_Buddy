import React from 'react';

// Function for deleting an item from the TransactionList component.

class DeleteForm extends React.Component {
  handleConfirmClick = () => {
    // TODO
  };

  render() {
    // Destructure Props
    const { modal_body, btnCancelClicked } = this.props;

    return (
      <div className="delete-form-container">
        <div>{modal_body}</div>
        <button className="btn btn-confirm" onClick={this.handleConfirmClick}>
          Confirm
        </button>
        <button className="btn btn-cancel" onClick={btnCancelClicked}>
          Cancel
        </button>
      </div>
    );
  }
}

export default DeleteForm;
