"use client";
import React from "react";
import styles from "./Table.module.css";
import postService from '@/app/appwrite/config'

function updateObjectById(array, idToUpdate, updatedProperties) {
  const indexToUpdate = array.findIndex(obj => obj.id === idToUpdate);
  if (indexToUpdate !== -1) {
      // Update the object's properties
      array[indexToUpdate] = { ...array[indexToUpdate], ...updatedProperties };
  }
  return array;
}

function Table({ tableData }) {

  const handleDelete = async (data) => {

    // let newTableData = tableData;

    // newTableData = updateObjectById(newTableData, data, { status: true });

    // console.log("NEW -->", newTableData)

    // setTableData(newTableData);

    const response = await postService.updateStatus(data);

   console.log("DELETE RES : ", response)

  }

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
                      <button className={styles.delete} onClick={() => handleDelete(data.$id)}>Delete</button>
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
