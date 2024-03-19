"use client";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./_appwrite/auth";
import { login, logout } from "./_store/authSlice";
import { useRouter } from "next/navigation";
import postService from "@/app/_appwrite/config";
import Loader from "./components/Loader/Loader";
// import { useSelector } from "react-redux";
// import { setTableData } from "@/app/store/tableSlice";
import { Audio } from "react-loader-spinner";

const Home = () => {
  // const [logInUser, setLoggedInUser] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);
  const [tableData, setTableData] = useState(null);
  // const tableData = useSelector((state) => state.table.tableData);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("user", userData);
        if (userData) dispatch(login({ userData }));
        else {
          dispatch(logout());
          router.push("/login");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    postService
      .getDataHome()
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
          <Form setTableData={setTableData} />
          {tableData && !loadingTable ? (
            <Table tableData={tableData} tag="home" />
          ) : (
            <p>NO DATA</p>
          )}
          {loadingTable && (
            <Loader />
          )}
        </main>

        <Footer />
      </div>
    </>
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
  );
};

export default Home;
