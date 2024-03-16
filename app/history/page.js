"use client"
import DeleteButton from "../components/DeleteButton/DeleteButton";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import { useEffect, useState } from "react";
import postService from '@/app/appwrite/config'
import Loader from "../components/Loader/Loader";


export default function History() {

  const [loadingTable, setLoadingTable] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    postService.getDataHistroy()
      .then((response) => {
        setTableData(response.documents);
      })
      .finally(setLoadingTable(false));

  }, []);

    return (
      <>
      <Navbar/>
      <DeleteButton/>
      <h1>History</h1>  
        {
            loadingTable ? (
              <Loader type="TailSpin" color="#0652dd" height={100} width={100} />
            ) :(
              tableData ? <Table tableData={tableData} /> : <p>no data</p>
            )
          }
      </>
     
    );
  }
