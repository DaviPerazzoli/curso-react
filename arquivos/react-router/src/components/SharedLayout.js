import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavBar";


const SharedLayout = () => {
  return (
    <>
      <StyledNavbar/>
      <Outlet/>
    </>
    
  );
};
export default SharedLayout;
