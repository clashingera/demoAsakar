"use client"
import React from 'react';
import styles from './Table.module.css';

function Table() {
  return (

    <>
      <div className={styles.myExpense}>

        <table border="1" className={styles.myExpense} >
          <tbody > 
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
                  <td>12-12-2024</td>
                  <td>sugar</td>
                  <td>100</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>1000</td>
                  <td>
                    <button className={styles.edit}>Edit</button>
                    <button className={styles.delete}>Delete</button>
                  </td>
                </tr>
                
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;