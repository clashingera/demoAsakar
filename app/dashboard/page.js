"use client"
// import Link from "next/link";
import Table from "../components/Table/Table";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import postService from '@/app/appwrite/config'
import Loader from "../components/Loader/Loader";
import Style from "./page.module.css"

export default function Dashboard() {

  const [loadingTable, setLoadingTable] = useState(true);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    postService.getDataDashboard()
      .then((response) => {
        setTableData(response.documents);
      })
      .finally(setLoadingTable(false));

  }, []);

  return (
    <>
    <Navbar/>

    <div className={Style.filter}>
      <h1>Dashboard Filter</h1>
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" />
      <button className={Style.button}>Filter</button>
      <button className={Style.button}>Download Report</button>
    </div>


  
 {/* laudya filter chi butoon banvas */}
 {!loadingTable ? <Table tableData={tableData} tag="dashboard" setTableData={setTableData} /> : <p></p>}
    </>
   
  );
}
