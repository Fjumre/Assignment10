import Header from "./Header";
import { Outlet } from "react-router-dom";

function Applayout(){
    return(
      <>
        
        <Header/>
        <Outlet/>
  
      </>
    )
  }


  export default Applayout;