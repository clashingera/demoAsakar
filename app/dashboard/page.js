import Link from "next/link";
import Table from "../components/Table/Table";
import Navbar from "../components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <>
    <Navbar/>
 <h1>Dashboard</h1>  
 {/* laudya filter chi butoon banvas */}
 <Table/>
    </>
   
  );
}
