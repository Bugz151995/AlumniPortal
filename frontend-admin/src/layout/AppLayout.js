import { ToastContainer } from "react-toastify";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.minimal.css";
import "./dist/main.css";

const AppLayout = (props) => {    
  return (
    <div className="app-container app-theme-white body-tabs-line fixed-sidebar fixed-header">      
      <TopNavbar />
      <div className="app-main">
        <SideNavbar />
        <div className="app-main__outer">
          {props.element}
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AppLayout