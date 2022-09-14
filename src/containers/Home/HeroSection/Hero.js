import React from "react";
import ContentContainer from "../../../components/Common/ContentContainer/index";
import {
  HeroSection,
  HeroContainerStyled,
  ButtonContainerStyled,
  CtaButtonStyled,
} from "./styled";
import { useMediaQuery, useTheme } from "@mui/material";

const Hero = ({ HeroContent }) => {
  const theme = useTheme();
  let imageChange = useMediaQuery(theme.breakpoints.down("md"));
  const data = HeroContent;
  console.log(imageChange);
  return (
    <HeroSection>
      <ContentContainer>
        <HeroContainerStyled>
          <img
            src={imageChange ? data.bannerImageMobileUrl : data.bannerImageUrl}
            alt="banner"
            width={"100%"}
            height="100%"
          />
          <ButtonContainerStyled>
            <CtaButtonStyled>{data.btnText1}</CtaButtonStyled>
            <CtaButtonStyled>{data.btnText2}</CtaButtonStyled>
          </ButtonContainerStyled>
        </HeroContainerStyled>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
