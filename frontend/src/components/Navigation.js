import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../static/logo.jpg";
import "../App.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="app-logo" href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
          />{" "}
          <span className="brand-name">Inventory Management System</span>
        </Navbar.Brand>
      </Navbar>
      <div className="sidebar">
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader
            prefix={<i className="fa fa-bars" />}
            className="sidebar-header"
          >
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-menu-item" icon="home">
                  Home
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/items" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-menu-item" icon="list">
                  Items List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/manage" activeClassName="activeClicked">
                <CDBSidebarMenuItem
                  className="sidebar-menu-item"
                  icon="cog"
                  iconType="solid"
                >
                  Manage Lists
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter>
            <div className="sidebar-footer-item">
              <CDBSidebarMenuItem
                className="sidebar-menu-item"
                icon="sign-out-alt"
              >
                Logout
              </CDBSidebarMenuItem>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
