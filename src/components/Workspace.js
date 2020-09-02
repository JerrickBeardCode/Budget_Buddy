// Workspace.js encompases all sections that are not header and footer:
// 1.) the sidebar component
// 2.) the incomes component
// and 3.) the expenses component

import React from 'react';
import { Spring } from 'react-spring/renderprops'; // For Animations
import Sidebar from './Sidebar';
import Incomes from './Incomes';
import Expenses from './Expenses';
import Modal from './Modal';

class Workspace extends React.Component {
  // Initialize state to tell if the modal is currently active or not
  state = {
    modal_active: false,
    add_type: '', // Do we want to add an income or an expense?
    num_incomes: 0, // App starts with 0 incomes
    num_expenses: 0, // App starts with 0 expenses
    incomes_arr: [],
    expenses_arr: [],
    transaction_id: 0 // Used as key when calling map function
  };

  // This function will trigger a modal whenever the 'Add Income' button is clicked
  onIncButtonClick = () => {
    // Change state to indicate that modal is open
    this.setState({ modal_active: true, add_type: 'income' });
  };

  // This function is similar to above, but for 'Add Expense' button
  onExpButtonClick = () => {
    // Change state to indicate that modal is open
    this.setState({ modal_active: true, add_type: 'expense' });
  };

  // This function will toggle the state of the modal to false
  closeModal = () => {
    this.setState({ modal_active: false });
  };

  // When a value is entered and the 'confirm' button is clicked (or 'enter' key is pressed), we
  // need to send the entered data to the appropriate TransactionList component
  // (either in Incomes.js or Expenses.js)
  onConfirmButtonClick = input_value => {
    // !!!: Since we don't set the id inside of InputForm.js, we have to do it here.
    // Set id for the object parameter (input value) before storing it in the array
    input_value.transaction_id = this.state.transaction_id;
    const next_transaction_id = this.state.transaction_id + 1; // Need a new id to store in the state

    // Use current state of add_type to determine if user input an income or an expense
    if (this.state.add_type === 'income') {
      const temp = this.state.num_incomes + 1;

      // Copy current array and add new value.
      const temp_arr = [...this.state.incomes_arr];
      temp_arr.push(input_value);

      this.setState({
        num_incomes: temp,
        incomes_arr: temp_arr,
        transaction_id: next_transaction_id
      });
    } else {
      const temp = this.state.num_expenses + 1;

      const temp_arr = [...this.state.expenses_arr];
      temp_arr.push(input_value);

      this.setState({
        num_expenses: temp,
        expenses_arr: temp_arr,
        transaction_id: next_transaction_id
      });
    }

    this.closeModal();
  };

  // Function for deleting an item from the appropriate array.
  // Receives the transaction_id of the item user wants to delete.
  // Loop over array, find appropriate item, and delete it.
  deleteArrayItem = id_to_delete => {
    // Find the array item with id === id_to_delete and remove it from the array
    // Must do this for incomes_arr and expenses_arr
    const updated_incomes_arr = this.state.incomes_arr.filter(
      el => el.transaction_id !== id_to_delete
    );

    const updated_expenses_arr = this.state.expenses_arr.filter(
      el => el.transaction_id !== id_to_delete
    );

    this.setState({
      incomes_arr: updated_incomes_arr,
      expenses_arr: updated_expenses_arr
    });
  };

  render() {
    return (
      <section id="workspace-container">
        <Sidebar
          onIncButtonClick={this.onIncButtonClick}
          onExpButtonClick={this.onExpButtonClick}
          incomes_arr={this.state.incomes_arr}
          expenses_arr={this.state.expenses_arr}
        />

        <Incomes
          num_incomes={this.state.num_incomes}
          incomes_arr={this.state.incomes_arr}
          deleteArrayItem={this.deleteArrayItem}
        />

        <Expenses
          num_expenses={this.state.num_expenses}
          expenses_arr={this.state.expenses_arr}
          deleteArrayItem={this.deleteArrayItem}
        />

        {this.state.modal_active ? (
          <Spring
            config={{ duration: 200 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <div style={props}>
                <Modal
                  closeModal={this.closeModal}
                  modal_header={`Add an ${this.state.add_type}:`}
                  modal_body={`$`}
                  modal_type={'input-form'}
                  onConfirmButtonClick={this.onConfirmButtonClick}
                />
              </div>
            )}
          </Spring>
        ) : null}
      </section>
    );
  }
}

export default Workspace;
