"use client"
// import Link from "next/link";
import Table from "../components/Table/Table";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import postService from '@/app/appwrite/config'
import Loader from "../components/Loader/Loader";
import Style from "./page.module.css"
import FilterButton from "../components/FilterButton/FilterButton";
import JsonToExcel from "../components/DownloadButton/DownloadButton";

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
    <JsonToExcel jsonData={tableData} fileName={new Date().toISOString().slice(0,10)} Style={Style} />
    <FilterButton Style={Style} setTableData={setTableData} />
    </div>
  
 {/* laudya filter chi butoon banvas */}
 {!loadingTable ? <Table tableData={tableData} tag="dashboard" setTableData={setTableData} /> : <p></p>}
    </>
   
  );
}
