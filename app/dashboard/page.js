"use client"
// import Link from "next/link";
import Table from "../components/Table/Table";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import postService from '@/app/appwrite/config'
import Loader from "../components/Loader/Loader";


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
 <h1>Dashboard</h1>  
 {/* laudya filter chi butoon banvas */}
 {!loadingTable ? <Table tableData={tableData} tag="dashboard" /> : <p></p>}
    </>
   
  );
}
