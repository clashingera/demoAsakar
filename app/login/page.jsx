"use client";
import { Suspense} from "react";
import LoginFrom from "../components/LoginForm/LoginFrom";
import Loading from "./loading";


const LoginPage = () => {
 
  return (
    <>
    <Suspense fallback={<Loading/>}>
    <LoginFrom/>
    </Suspense>
    </>
  );
};



export default LoginPage;
