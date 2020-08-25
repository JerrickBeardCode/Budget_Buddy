import React from 'react';
import Modal from './Modal';

// PROPS: items_arr - array of transaction items to be displayed
//        deleteArrayItem - callback to Workspace.js that updates appropriate array
class TransactionList extends React.Component {
  // State - is the user currently trying to delete an item?
  state = { item_to_delete: null, modal_active: false };

  /*
  handleDeleteButton = () => {
    this.setState({ attempt_delete: true });
  };*/

  // Set modal_active to true so modal renders
  toggleModal = () => {
    this.setState({ modal_active: true });
  };

  // Set modal_active state so modal doesn't render
  closeModal = () => {
    this.setState({ modal_active: false });
  };

  // If confirm is clicked, we need to delete the item
  onConfirmButtonClick = () => {
    // Callback passed from Workspace.js
    //this.props.deleteArrayItem();
  };

  render() {
    const { items_arr } = this.props;

    return (
      <div className="transactions-container">
        {/* Use item index for key. Keys reassigned on each render call */}
        {items_arr.map((item, index) => {
          return (
            <div className="transaction-entry" key={index}>
              <span className="transaction-amount">$ {item.amount}</span>
              <p className="entry-right">
                <span className="transaction-title">{item.title}</span>
                {/* Our delete button has the key, so that we can obtain the info 
                      for the item we want to delete */}
                <button
                  className="delete-entry-btn btn-light"
                  onClick={this.toggleModal}
                >
                  X
                </button>
              </p>
            </div>
          );
        })}
        {this.state.modal_active ? (
          <Modal
            modal_header={'Delete this item?'}
            modal_body={'TODO: fetch item data'}
            modal_type={'delete-form'}
            closeModal={this.closeModal}
            onConfirmButtonClick={this.onConfirmButtonClick}
          />
        ) : null}
      </div>
    );
  }
}

export default TransactionList;
