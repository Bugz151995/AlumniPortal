import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderMenu from "./HeaderMenu";

const SideNavbarMenu = () => {
  return (
    <div className="scrollbar-sidebar">
      <nav className="app-sidebar__inner">
        <ul className="vertical-nav-menu">
          <li className="app-sidebar__heading">Menu</li>
          <li>
            <NavLink to={`/home`}>
              <i className="metismenu-icon pe-7s-home"></i>
              Dashboard
            </NavLink>
            <NavLink to={`/announcements`}>
              <i className="metismenu-icon pe-7s-speaker"></i>
              Announcements
            </NavLink>
            <NavLink to={`/careers`}>
              <i className="metismenu-icon pe-7s-portfolio"></i>
              Careers
            </NavLink>
            <NavLink to={`/events`}>
              <i className="metismenu-icon pe-7s-date"></i>
              Events
            </NavLink>
          </li>

          <li className="app-sidebar__heading">User Management</li>
          <li>
            <NavLink to={`/user_request`}>
              <i className="metismenu-icon pe-7s-check"></i>
              User Request
            </NavLink>   
            <NavLink to={`/user_list`}>
              <i className="metismenu-icon pe-7s-users"></i>
              User List
            </NavLink>         
          </li>

          <li className="app-sidebar__heading">Admin Management</li>
          <li>
            <NavLink to={`/admin_request`}>
              <i className="metismenu-icon pe-7s-shield"></i>
              Admin Request
            </NavLink>
            <NavLink to={`/admin_list`}>
              <i className="metismenu-icon pe-7s-network"></i>
              Admin List
            </NavLink>
            <NavLink to={`/activity_log`}>
              <i className="metismenu-icon pe-7s-timer"></i>
              Activity Log
            </NavLink>
          </li>

          <li className="app-sidebar__heading">Archive Management</li>
          <li>
            <NavLink to={`/archive_list`}>
              <i className="metismenu-icon pe-7s-box1"></i>
              Archive List
            </NavLink>
          </li>

          <li className="app-sidebar__heading">Forum Management</li>
          <li>
            <NavLink to={`/forum_threads`}>
              <i className="metismenu-icon pe-7s-comment"></i>
              Forum Threads
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const SideNavbar = () => {
  return (
    <div className="app-sidebar sidebar-shaddow bg-night-sky sidebar-text-light">   
      <HeaderMobileMenu />
      <HeaderLogo />
      <HeaderMenu />
      <SideNavbarMenu />
    </div>
  )
}

export default SideNavbar;