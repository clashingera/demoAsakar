import React from 'react'
import { useRouter } from 'next/navigation';
import {useDispatch } from 'react-redux';
import authService from "@/app/appwrite/auth"
import { login as authLogin } from '@/app/store/authSlice';
import { useState } from 'react';

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
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handelLogin} >
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData(p => ({...p, email : e.target.value}))}
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData(p => ({...p, password : e.target.value}))}
        />
        <button type='submit'>
          Login
        </button>
      </form>
      {errors && <p>{errors}</p>}       
    </div>
  )
}

export default LoginFrom