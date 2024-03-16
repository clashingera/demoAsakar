"use client";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import styles from './page.module.css';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { useRouter } from "next/navigation";
import postService from '@/app/appwrite/config'
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { setTableData } from "@/app/store/tableSlice";

const Home = () => {

  // const [logInUser, setLoggedInUser] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);
  // const [tableData, setTableData] = useState([]);
  const tableData = useSelector((state) => state.table.tableData);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("user", userData)
        if (userData) dispatch(login({ userData }));
        else {
          dispatch(logout());
          router.push("/login")
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    postService.getDataHome()
      .then((response) => {
        setTableData(response.documents);
      })
      .finally(setLoadingTable(false));

  }, []);

  return !loading ? (
    <>
      <div>
        <Header />
        <Navbar />
        <main className={styles.main}>
          <Form />
          {
            loadingTable ? (
              <Loader type="TailSpin" color="#0652dd" height={100} width={100} />
            ) : tableData?.length  === 0  ? (
              <p>There is no Data </p>
            ) : (
              <Table tableData={tableData} />
            )
          }
      
        </main>

        <Footer />
      </div>
    </>
  ) : (
    <h1>loading...</h1>
  );

};

export default Home;

