import React from 'react';

// Function for deleting an item from the TransactionList component.
// PROPS: modal_body - text for modal body
//        btnConfirmClicked - callback to modal
//        btnCancelCliked - callback to modal
class DeleteForm extends React.Component {
  handleConfirmClick = () => {
    // Use callback method from modal
    // (this function requires an object param, but we don't have one here.
    //  Use a temporary one)
    this.props.btnConfirmClicked({ temp_object: 0 });
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
