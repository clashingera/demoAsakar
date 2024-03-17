"use client";
import React from "react";
import styles from "./Table.module.css";
import postService from "@/app/appwrite/config";
import { useRouter } from "next/navigation";
import { Audio } from "react-loader-spinner";
import DeleteButtonTable from "../DeleteButton/DeleteButtonTable";



function Table({ tableData, tag}) {
  const router = useRouter();

  
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
                {tag === "dashboard" && <th>Actions</th>}
              </tr>
              {tableData &&
                tableData.map((data) => (
                  <tr key={data.$id}>
                    <td>
                      {new Date(data.$createdAt).toISOString().slice(0, 10)}
                    </td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>{data.quantity}</td>
                    <td>{data.CGST}</td>
                    <td>{data.SGST}</td>
                    <td>{data.IGST}</td>
                    <td>{data.total}</td>
                    {tag === "dashboard" && (
                      <td>
                        <button className={styles.edit}>Edit</button>
                        { tag === "dashboard"  && <DeleteButtonTable id={data.$id} tag= {tag} />}
                        { tag === "history"  && <RestoreButtonTable id={data.$id} tag= {tag} />}

                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{marginLeft : "590px", marginTop : "250px"}}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        </div>
      )}
    </>
  );
}

export default Table;
