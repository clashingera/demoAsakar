"use client";
import React from "react";
import styles from "./Table.module.css";
// import postService from "@/app/appwrite/config";
import { useRouter } from "next/navigation";
import { Audio } from "react-loader-spinner";
import DeleteButtonTable from "../DeleteButton/DeleteButtonTable";
import RestoreButtonTable from "../RestoreButtonTable/RestoreButtonTable";
import { usePathname } from "next/navigation";

function Table({ tableData, tag, setTableData }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
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
                {(tag === "dashboard" || tag === "history") && <th>Actions</th>}
              </tr>
              {tableData.length !== 0 ? (
                tableData.map((data) => (
                  <tr key={data.$id}>
                    <td>
                      {new Date(data.date).toISOString().slice(0, 10)}
                    </td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>{data.quantity}</td>
                    <td>{data.CGST}</td>
                    <td>{data.SGST}</td>
                    <td>{data.IGST}</td>
                    <td>{data.total}</td>
                    <td>
                        {tag === "dashboard" && <button className={styles.edit}>Edit</button>}
                        {tag === "dashboard" && (
                          <DeleteButtonTable
                            id={data.$id}
                            tag={tag}
                            setTableData={setTableData}
                          />
                          )}{tag === "history" && (
                          <RestoreButtonTable
                            id={data.$id}
                            tag={tag}
                            setTableData={setTableData}
                          />
                          )}
                      </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <h2
                    style={{
                      marginTop: "16px",
                      textAlign: "center",
                      marginBottom: "16px",
                      color: "GrayText",
                    }}
                  >
                    NO DATA
                  </h2>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ marginLeft: "590px", marginTop: "200px" }}>
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
