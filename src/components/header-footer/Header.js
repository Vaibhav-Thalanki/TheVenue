import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(true);
  function toggleDrawer(value) {
    setDrawerOpen(value);
  }
  function handleScroll() {
    if (window.scrollY > 0) {
      setHeaderShow(false);
    } else {
      setHeaderShow(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow?'transparent':'#2f2f2f',
        boxShadow: "none",
        padding: " 10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The venue</div>
          <div className="header_logo_title">MUSICAL EVENTS</div>
        </div>
        <IconButton
          color="inherit"
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SideDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default Header;
