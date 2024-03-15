"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Form from "./components/Form";
import styles  from './page.module.css';
import LoginPage from "./login/page";
import { useState } from "react";

const Home = () => {

  const [logInUser, setLoggedInUser] = useState(true);

  const getLoggedUser = (loggedInUser) => {
    setLoggedInUser(loggedInUser);
  }

  if (logInUser) {
    return (
      <>
      <div>
          <Header/>
          <Navbar setLoggedInUser={setLoggedInUser}/>
        <main  className={styles.main}>
          <Form/>
          <Table/>
        </main>
        
          <Footer/>
      </div>
      </>
    );
  }

  return (
    <div>
      <p className={styles.ptag}>Not logged in</p>
      <LoginPage getLoggedUser={getLoggedUser}/>
    </div>
  );
};

export default Home;

