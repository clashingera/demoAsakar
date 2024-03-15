import Link from "next/link";
import Table from "../components/Table";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
    <Navbar/>
 <h1>Dashboard</h1>  
 <Link href="/">HOME</Link>
 {/* laudya filter chi butoon banvas */}
 <Table/>
    </>
   
  );
}
