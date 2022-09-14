import React from "react";
import ContentContainer from "../../../components/Common/ContentContainer/index";
import NavbarContent from "../../../siteContent/Navbar/index";

import {
  Nav1Styled,
  LogoImageWrapperStyled,
  Image as AppLogo,
  LocationSearchInputContainerStyled,
  IconLocation,
  IconArrowDown,
  InputLocationStyled,
  SearchIconContainerStyled,
  IconSearch,
  GoodsSearchInputContainerStyled,
  InputGoodsStyled,
  TextButtonStyled,
  CtaButtonStyled,
  IconCamera,
  NavPrimaryStyled,
  NavsContainerStyled,
  NavSecondaryStyled,
  Nav2Styled,
  OptionsContainerStyled,
  OptionDifferStyled,
  OptionStyled,
  OptionTextStyled,
} from "./styled.js";

const Navbar = () => {
  const staticData = NavbarContent;
  return (
    <NavsContainerStyled>
      <NavPrimaryStyled>
        <ContentContainer>
          <Nav1Styled>
            <LogoImageWrapperStyled>
              <AppLogo
                src={staticData.appLogo}
                width={"100%"}
                height={"100%"}
                alt="letgo-logo"
              />
            </LogoImageWrapperStyled>
            <LocationSearchInputContainerStyled>
              <IconLocation />
              <InputLocationStyled
                type={"text"}
                defaultValue={staticData.locationInputValue}
              />
              <IconArrowDown />
            </LocationSearchInputContainerStyled>
            <GoodsSearchInputContainerStyled>
              <InputGoodsStyled
                type={"text"}
                placeholder={staticData.searchInputPlaceholder}
              />
              <SearchIconContainerStyled>
                <IconSearch />
              </SearchIconContainerStyled>
            </GoodsSearchInputContainerStyled>
            <TextButtonStyled variant="text">
              {staticData.textBtnContent}
            </TextButtonStyled>

            <CtaButtonStyled startIcon={<IconCamera />}>
              {staticData.containedBtnContent}
            </CtaButtonStyled>
          </Nav1Styled>
        </ContentContainer>
      </NavPrimaryStyled>

      <NavSecondaryStyled>
        <ContentContainer>
          <Nav2Styled>
            <OptionsContainerStyled>
              <OptionDifferStyled>
                <OptionTextStyled variant="p" incweight={"true"}>
                  {staticData.differOption}
                </OptionTextStyled>{" "}
                <IconArrowDown style={{ fontSize: "3rem" }} />{" "}
              </OptionDifferStyled>
              {staticData.options.map((item, index) => {
                return (
                  <OptionStyled key={index}>
                    <OptionTextStyled variant="p">{item}</OptionTextStyled>
                  </OptionStyled>
                );
              })}
            </OptionsContainerStyled>
          </Nav2Styled>
        </ContentContainer>
      </NavSecondaryStyled>
    </NavsContainerStyled>
  );
};

export default Navbar;
