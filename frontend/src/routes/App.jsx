import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import InitializeData from "../components/InitializeData";

function App() {
  return (
    <>
      <Navbar />
      <InitializeData />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
