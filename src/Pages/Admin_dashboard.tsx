import Layout from "../dashboard/Layout";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function Admin_dashboard() {
    const user = { name: 'John Doe', age:25 };
    // const user = null;

  return (
    <div className="h-screen">
      <Navbar user={user} /> 
      <Layout />
      <Footer/>
    </div>
  )
}