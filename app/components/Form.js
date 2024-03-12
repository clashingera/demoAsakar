"use client"
import React from 'react';
import styles from './form.module.css';

function Form() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.formContainer}>
        <form id="expenseForm" className={styles.formContainer}>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" defaultValue="sugar" required /><br />
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" step="1" defaultValue="1" required /><br />
          <label htmlFor="Quantity">Quantity:</label>
          <input type="number" id="Quantity" name="Quantity" step="1" defaultValue="1" required /><br />
          <div className={styles.inlineInputs}>
            <div>
              <label htmlFor="cgst">CGST:</label>
              <input type="number" id="cgst" name="cgst" step="0.01" min="0" max="100" defaultValue="2.5" required /><br />
            </div>
            <div>
              <label htmlFor="sgst">SGST:</label>
              <input type="number" id="sgst" name="sgst" step="0.01" min="0" max="100" defaultValue="2.5" required /><br />
            </div>
            <div>
              <label htmlFor="IGST">IGST:</label>
              <input type="number" id="IGST" name="IGST" step="0.01" min="0" max="100" defaultValue="2.5" required /><br />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required /><br />
            </div>
          </div>
          <button className={styles.submit} type="submit">Add Expense</button>
        </form>
      </div>

      <div className={styles.logoContainer}>
        <img src="/img/logo.jpg" alt="Company Logo" className={styles.logo} />
      </div>

      <div className={styles.expenseTracker}>
        <table border="1" className={styles.expTracker}>
          <tbody>
            <tr>
              <th colSpan="2">Expense Tracker</th>
            </tr>
            <tr>
              <th>Todays</th>
              <th>Month</th>
            </tr>
            <tr>
              <td id="todayExpense">0.00</td>
              <td id="thisMonthExpense">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
