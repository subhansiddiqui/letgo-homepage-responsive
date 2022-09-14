import React from "react";
import NavbarContent from "../../../siteContent/Navbar/index";

import ContentContainer from "../../../components/Common/ContentContainer/index";
import {
  NavHeaderStyled,
  NavContainerStyled,
  FlexContainerStyled,
  LogoImageWrapperStyled,
  Image as AppLogo,
  IconMenu,
  LocationButtonStyled,
  IconLocation,
  SearchBoxContainerStyled,
  IconSearch,
  SearchInputStyled,
} from "./styled";

const Navbar = () => {
  const staticData = NavbarContent;

  return (
    <NavHeaderStyled>
      <ContentContainer>
        <NavContainerStyled>
          <FlexContainerStyled style={{ gap: "1rem" }}>
            <IconMenu />
            <LogoImageWrapperStyled>
              <AppLogo
                src={staticData.appLogo}
                width={"100%"}
                height={"100%"}
                alt="letgo-logo"
              />
            </LogoImageWrapperStyled>
          </FlexContainerStyled>
          <FlexContainerStyled>
            <LocationButtonStyled variant="text">
              {staticData.locationInputValue}
            </LocationButtonStyled>
            <IconLocation />
          </FlexContainerStyled>
        </NavContainerStyled>
        <SearchBoxContainerStyled>
          <IconSearch />
          <SearchInputStyled
            type={"text"}
            placeholder={staticData.searchInputPlaceholder}
          />
        </SearchBoxContainerStyled>
      </ContentContainer>
    </NavHeaderStyled>
  );
};

export default Navbar;
