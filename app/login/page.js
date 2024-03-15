"use client";
import { useState } from "react";
import { account, ID } from "@/app/appwrite";
import { useRouter } from "next/navigation";

const LoginPage = ({getLoggedUser}) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const login = async (email, password) => {
    const session = await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
    getLoggedUser(loggedInUser);
  }
   
  return (
    <div>
      <p>Not logged in</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>
        {/* <button type="button" onClick={register}>
          Register
        </button> */}
      </form>
    </div>
  );
};



export default LoginPage;
