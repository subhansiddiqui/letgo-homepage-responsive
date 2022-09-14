import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopFooter from "./Desktop";
import MobileFooter from "./MobileTablet";
import { FooterWrapper } from "./styled";
const Footer = () => {
  const theme = useTheme();
  let changeFooter = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterWrapper>
      {changeFooter ? <MobileFooter /> : <DesktopFooter />}
    </FooterWrapper>
  );
};

export default Footer;
