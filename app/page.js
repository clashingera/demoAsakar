"use client";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import styles  from './page.module.css';
import { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { useRouter } from "next/navigation";

const Home = () => {

  // const [logInUser, setLoggedInUser] = useState(true);

  const [loading, setLoading] = useState(true);
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


    return !loading ? (
      <>
      <div>
          <Header/>
          <Navbar/>
        <main  className={styles.main}>
          <Form/>
          <Table/>
        </main>
        
          <Footer/>
      </div>
      </>
    ): (
      <h1>loading...</h1>
    );

};

export default Home;

