"use client";
import React from "react";
import styles from "./Table.module.css";

function Table({ tableData }) {
  return (
    <>
      {tableData ? (
        <div className={styles.myExpense}>
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
              {tableData &&
                tableData.map((data) => (
                  <tr key={data.$id}>
                    <td>{data.date.slice(0, 10)}</td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>{data.quantity}</td>
                    <td>{data.CGST}</td>
                    <td>{data.SGST}</td>
                    <td>{data.IGST}</td>
                    <td>{data.total}</td>
                    <td>
                      <button className={styles.edit}>Edit</button>
                      <button className={styles.delete}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{paddingLeft : "20px", marginTop : "100px"}}>loging</p>
      )}
    </>
  );
}

export default Table;
