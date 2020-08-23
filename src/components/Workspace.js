// Workspace.js encompases all sections that are not header and footer:
// 1.) the sidebar component
// 2.) the incomes component
// and 3.) the expenses component

import React from 'react';
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
    expenses_arr: []
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
    // Use current state of add_type to determine if user input an income or an expense
    if (this.state.add_type === 'income') {
      const temp = this.state.num_incomes + 1;

      // Copy current array and add new value.
      const temp_arr = [...this.state.incomes_arr];
      temp_arr.push(input_value);

      this.setState({ num_incomes: temp, incomes_arr: temp_arr });
    } else {
      const temp = this.state.num_expenses + 1;

      const temp_arr = [...this.state.expenses_arr];
      temp_arr.push(input_value);

      this.setState({ num_expenses: temp, expenses_arr: temp_arr });
    }

    this.closeModal();
  };

  render() {
    return (
      <section id="workspace-container">
        <Sidebar
          onIncButtonClick={this.onIncButtonClick}
          onExpButtonClick={this.onExpButtonClick}
        />

        <Incomes
          num_incomes={this.state.num_incomes}
          incomes_arr={this.state.incomes_arr}
        />

        <Expenses
          num_expenses={this.state.num_expenses}
          expenses_arr={this.state.expenses_arr}
        />

        {this.state.modal_active ? (
          <Modal
            closeModal={this.closeModal}
            modal_header={`Add an ${this.state.add_type}:`}
            modal_body={`$`}
            modal_type={'input-form'}
            onConfirmButtonClick={this.onConfirmButtonClick}
          />
        ) : null}
      </section>
    );
  }
}

export default Workspace;
