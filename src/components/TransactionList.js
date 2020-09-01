import React from 'react';
import Modal from './Modal';

// PROPS: items_arr - array of transaction items to be displayed
//        deleteArrayItem - callback to Workspace.js that updates appropriate array
//        type - incomes or expenses? (used for class names)
class TransactionList extends React.Component {
  // State - is the user currently trying to delete an item?
  state = { id_to_delete: null, modal_active: false, item_info_to_delete: '' };

  /*
  handleDeleteButton = () => {
    this.setState({ attempt_delete: true });
  };*/

  // Set modal_active to true so modal renders
  toggleModal = (id, amt, ttl) => {
    this.setState({
      modal_active: true,
      id_to_delete: id,
      item_info_to_delete: `$${amt} ${ttl}`
    });
  };

  // Set modal_active state so modal doesn't render
  closeModal = () => {
    this.setState({ modal_active: false });
  };

  // If confirm is clicked, we need to delete the item
  onConfirmButtonClick = ignore => {
    // Callback passed from Workspace.js
    this.closeModal();
    this.props.deleteArrayItem(this.state.id_to_delete);
  };

  // Convert item value to 2 decimals
  twoDecimals = val => {
    val = Number(Math.round(val + 'e' + 2) + 'e-' + 2).toFixed(2);
    return val;
  };

  render() {
    const { items_arr, type } = this.props;

    return (
      <div className="transactions-container">
        {/* Use item index for key. Keys reassigned on each render call */}
        {items_arr.map(item => {
          return (
            <div
              className={`${type}-transaction-entry`}
              key={item.transaction_id}
            >
              <span className={`${type}-transaction-amount`}>
                {(() => {
                  if (type === 'incomes') {
                    return <>$ {this.twoDecimals(item.amount)}</>;
                  } else {
                    return <>$-{this.twoDecimals(item.amount)}</>;
                  }
                })()}
              </span>
              <p className="entry-right">
                <span className="transaction-title">{item.title}</span>
                <button
                  className={`delete-entry-btn ${type}-delete-btn`}
                  onClick={() =>
                    this.toggleModal(
                      item.transaction_id,
                      item.amount,
                      item.title
                    )
                  }
                >
                  X
                </button>
              </p>
            </div>
          );
        })}
        {this.state.modal_active ? (
          <Modal
            modal_header={'Delete entry:'}
            modal_body={`${this.state.item_info_to_delete} ?`}
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
