import React from 'react';
import Modal from './Modal';

// PROPS: items_arr - array of transaction items to be displayed
class TransactionList extends React.Component {
  // State - is the user currently trying to delete an item?
  state = { attempt_delete: false, item_to_delete: null, modal_active: false };

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

  // Delete the item
  onConfirmButtonClick = () => {
    // TODO
    console.log(`TODO: how will we delete the item???`);
  };

  render() {
    const { items_arr } = this.props;

    return (
      <div className="transactions-container">
        {items_arr.map(item => {
          return (
            <>
              <div className="transaction-entry">
                <span className="transaction-amount">$ {item.amount}</span>
                <p className="entry-right">
                  <span className="transaction-title">{item.title}</span>
                  <button
                    className="delete-entry-btn btn-light"
                    onClick={this.toggleModal}
                  >
                    X
                  </button>
                </p>
              </div>
            </>
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
