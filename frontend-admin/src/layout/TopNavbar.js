import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderMenu from "./HeaderMenu";

// import { toast } from "react-toastify";
// toast.success("test");
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="btn-transparent"
    variant=""
  >
    {children}
  </Button>
));

const AppHeaderLeft = () => {
  return (
    <div className="app-header-left">
      <div className="search-wrapper">
        <div className="input-holder">
          <input type="text" className="search-input" placeholder="Type to search"/>
          <button className="search-icon"><span></span></button>
        </div>
        <button className="close"></button>
      </div>
      <ul className="header-menu nav">
        <li className="btn-group nav-item">
          <button className="nav-link btn btn-transparent">
            <i className="nav-link-icon fa fa-edit"></i>
            New Announcement
          </button>
        </li>
        <li className="dropdown nav-item">
          <a href="/" className="nav-link">
            <i className="nav-link-icon fa fa-cog"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}

const AppHeaderRight = () => {
  return (
    <div className="app-header-right">
      <div className="header-btn-lg pe-0">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <Dropdown as={ButtonGroup}> 
                <Dropdown.Toggle as={CustomToggle} id="user-profile-dropdown">                  
                  <img width="42" className="rounded-circle" src="http://localhost:3000/assets/images/avatars/1.jpg" alt=""/>
                    <i className="fa fa-angle-down ms-2 opacity-8"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2 shadow">
                  <Dropdown.Item href="#/action-1">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                          <div className="widget-content-left">
                            <img width="40" className="rounded-circle" src="http://localhost:3000/assets/images/avatars/1.jpg" alt=""/>
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading text-dark">
                            John Doe
                          </div>
                          <div className="widget-subheading text-dark opacity-7">Role Here</div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2">
                    <i className="fas fa-bell fa-fw me-2"></i>
                    <span className="align-middle me-5">Notifications</span>
                    <i className="fas fa-chevron-right ms-auto"></i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i className="fas fa-comments fa-fw me-2"></i>
                    <span className="align-middle me-5">Messages</span>
                    <i className="fas fa-chevron-right ms-auto"></i>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    <i className="fas fa-sign-out-alt me-2 fa-fw"></i>Log-out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            
            <div className="widget-content-left  ml-3 header-user-info">
              <div className="widget-heading">
                John Doe
              </div>
              <div className="widget-subheading">
                Role Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TopNavbarContent = () => {
  return (
    <div className="app-header__content">
      <AppHeaderLeft />
      <AppHeaderRight />
    </div>
  )
}

const TopNavbar = () => {
  return (
    <div className="app-header header-shadow bg-primary header-text-light">
      <HeaderMobileMenu />
      <HeaderLogo />
      <HeaderMenu />
      <TopNavbarContent />
    </div>
  )
}

export default TopNavbar;