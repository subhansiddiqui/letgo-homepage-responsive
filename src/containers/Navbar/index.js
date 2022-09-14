import React from "react";
import NavbarDesktop from "./Desktop/index";
import { useMediaQuery, useTheme } from "@mui/material";
import NavbarMobile from "./MobileTablet";

const Navbar = () => {
  const theme = useTheme();
  let changeNavbar = useMediaQuery(theme.breakpoints.down("md"));
  console.log(changeNavbar);
  return <>{changeNavbar ? <NavbarMobile /> : <NavbarDesktop />}</>;
};

export default Navbar;
