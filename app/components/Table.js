"use client"
import React from 'react';
import styles from './Table.module.css';

function Table() {
  return (

    <>
        <table border="1" className={styles.myExpense}>
          <tbody> 
                <tr>
                    <th colSpan="9">MY Expenses</th>
                </tr>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount (Rs.)</th>
                    <th>Quantity</th>
                    <th>CGST</th>
                    <th>SGST</th>
                    <th>IGST</th>
                    <th>Total Amount (Rs.)</th>
                    <th>Actions</th>
                </tr>
                <tr>
                  <td>
                    dgdgdh
                  </td>
                </tr>
        </tbody>
        </table>
    </>
  );
}

export default Table;