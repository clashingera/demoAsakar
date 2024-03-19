"use client";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import { useEffect, useState } from "react";
import postService from "@/app/_appwrite/config";
import Loader from "../components/Loader/Loader";
import {Audio} from "react-loader-spinner"

export default function History() {
  const [loadingTable, setLoadingTable] = useState(true);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    postService
      .getDataHistroy()
      .then((response) => {
        setTableData(response.documents);
      })
      .finally(setLoadingTable(false));
  }, []);

  return (
    <>
    
    <Navbar />
    <h1>History</h1>
    {/* {loadingTable && <Loader />} */}
    
    <DeleteButton />
    
    {/* Table or "no data" message */}
    {!loadingTable &&  <Table tableData={tableData} tag="history" setTableData={setTableData}/>}
  




      {/* <Navbar />
      <DeleteButton />
      <h1>History</h1>
      {!loadingTable ? (
        <Table tableData={tableData} tag="history" />
      ) : (
        <p></p>
      )} */}
    </>
  );
}
