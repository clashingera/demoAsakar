import React from 'react'
import { useRouter } from 'next/navigation';
import {useDispatch } from 'react-redux';
import authService from "@/app/_appwrite/auth"
import { login as authLogin } from '@/app/_store/authSlice';
import { useState } from 'react';
import styles from './Login.module.css';

function LoginFrom() {

    const router = useRouter();
    const dispatch = useDispatch();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [errors, setError] = useState(null);
    const [data, setData] = useState({email : "", password : ""}) 

    const handelLogin = async (e) => {

        e.preventDefault();
        
        setError("")
        try {     
          const session = await authService.login(data)
          // console.log("email", email)
          // console.log("password", password)
          // console.log(session)
          if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) {
              dispatch(authLogin({userData}))
              router.push('/')
            }
          }
        } catch (error) {
            setError("LOGIN ERROR ---->", error.message)
        }
    }

  return (
    <div className={styles.loginbody}>
      <div className={styles.logocontainer}>
         <img src="/img/logo.jpg" alt="logo"/>
      </div>
      <div className={styles.logincontainer}>
        <h2 className={styles.logintitle}>LOGIN</h2>
        <form className={styles.loginform} onSubmit={handelLogin} >


          <div className={styles.logininputgroup}>
            <label for="password" className={styles.loginlabel}>Password</label>
            <input
              className={styles.logininput}
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData(p => ({...p, email : e.target.value}))}
            />
          </div> 

          <div className={styles.logininputgroup}>
            <label for="password" className={styles.loginlabel}>Password</label>

            <input
              className={styles.logininput}
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData(p => ({...p, password : e.target.value}))}
            />
          </div>

          <button className={styles.loginbutton} type='submit'>
            Login
          </button>
        </form>

      </div>

      {errors && <p>{errors}</p>}       
    </div>
//     <>
//     <div className={styles.loginbody}>

// <div className={styles.logocontainer}>
//     <img src="/img/logo.jpg" alt="logo"/>
// </div>

// <div className={styles.logincontainer}>
//   <h2 className={styles.logintitle}>Login</h2>

//    <form className={styles.loginform} onSubmit={handelLogin}  >
        
//         <div className={styles.logininputgroup}>
//             <label for="username" className={styles.loginlabel}>Username</label>
//             <input type="email" id="username" name="username" className={styles.logininput} value={data.email} onChange={(e) => setData(p => ({...p, email : e.target.value}))}/> 
//         </div>

        
      
        
//         <div className={styles.logininputgroup}>
//             <label for="password" className={styles.loginlabel}>Password</label>
//             <a href="#" id="forgotPasswordLink" className={styles.forgotpasswordlink}> | Forgot Password?</a>
//             <input type="password" id="password" name="password" className={styles.logininput} value={data.password} required onChange={(e) => setData(p => ({...p, password : e.target.value}))}/>
//         </div>


      


//         <button type="submit" className={styles.loginbutton}>Log in</button>

//     </form>

// </div>

    
       
// </div>
//     </>
    // {errors && <p>{errors.message}</p>}
    
  )
}

export default LoginFrom