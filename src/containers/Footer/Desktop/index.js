import React from "react";
import ContentContainer from "../../../components/Common/ContentContainer/index";
import {
  FooterSectionStyled,
  FooterContainerStyled,
  CategorieContainer,
  CategorieListsContainerStyled,
  CategorieTitleStyled,
  CategorieList,
  ListTextStyled,
  LinkTextWrapperStyled,
  IconNButtonFlexContainerStyled,
  PlayStoreBtnContainerStyled,
  Img,
  IconFacebook,
  IconInsta,
  IconTwitter,
  IconYoutube,
  CategorieList as List,
  LinkTextWrapperStyled as Anchor,
  FlexContainerSecondaryFooterStyled,
  FlexSectionContainerStyled,
  OfficialLinksTitleStyled,
  LinkTextStyled,
  AboutTextStyled,
  CopyrightTextStyled,
} from "./styled";

import FooterContent from "../../../siteContent/Footer/FooterContent";
const DesktopFooter = () => {
  const data = FooterContent;
  return (
    <>
      <FooterSectionStyled>
        <ContentContainer widthc={"true"}>
          <FooterContainerStyled>
            {/* //! 1 */}

            <CategorieContainer>
              <CategorieTitleStyled variant="p">
                {data.categorie1.title}
              </CategorieTitleStyled>
              <CategorieListsContainerStyled>
                {data.categorie1.options.map((item, index) => {
                  return (
                    <CategorieList key={index}>
                      <ListTextStyled variant="subtitle1">
                        <LinkTextWrapperStyled href="#">
                          {item}
                        </LinkTextWrapperStyled>
                      </ListTextStyled>
                    </CategorieList>
                  );
                })}
              </CategorieListsContainerStyled>
            </CategorieContainer>
            {/* //! 2 */}
            <CategorieContainer>
              <CategorieTitleStyled variant="p">
                {data.categorie2.title}
              </CategorieTitleStyled>
              <CategorieListsContainerStyled>
                {data.categorie2.options.map((item, index) => {
                  return (
                    <CategorieList key={index}>
                      <ListTextStyled variant="subtitle1">
                        <LinkTextWrapperStyled href="#">
                          {item}
                        </LinkTextWrapperStyled>
                      </ListTextStyled>
                    </CategorieList>
                  );
                })}
              </CategorieListsContainerStyled>
            </CategorieContainer>
            {/* //! 3 */}
            <CategorieContainer>
              <CategorieTitleStyled variant="p">
                {data.categorie3.title}
              </CategorieTitleStyled>
              <CategorieListsContainerStyled>
                {data.categorie3.options.map((item, index) => {
                  return (
                    <CategorieList key={index}>
                      <ListTextStyled variant="subtitle1">
                        <LinkTextWrapperStyled href="#">
                          {item}
                        </LinkTextWrapperStyled>
                      </ListTextStyled>
                    </CategorieList>
                  );
                })}
              </CategorieListsContainerStyled>
            </CategorieContainer>
            {/* //! 4 */}
            <CategorieContainer>
              <CategorieTitleStyled variant="p">
                {data.categorie4.title}
              </CategorieTitleStyled>
              <CategorieListsContainerStyled>
                {data.categorie4.options.map((item, index) => {
                  return (
                    <CategorieList key={index}>
                      <ListTextStyled variant="subtitle1">
                        <LinkTextWrapperStyled href="#">
                          {item}
                        </LinkTextWrapperStyled>
                      </ListTextStyled>
                    </CategorieList>
                  );
                })}
              </CategorieListsContainerStyled>
            </CategorieContainer>
            {/* //! 5 */}

            <CategorieContainer>
              <CategorieTitleStyled variant="p">
                {data.categorie5.title}
              </CategorieTitleStyled>

              <IconNButtonFlexContainerStyled>
                <List>
                  <Anchor href="#">
                    <IconFacebook />
                  </Anchor>
                </List>
                <List>
                  <Anchor href="#">
                    {" "}
                    <IconInsta />
                  </Anchor>
                </List>
                <List>
                  <Anchor href="#">
                    {" "}
                    <IconTwitter />{" "}
                  </Anchor>
                </List>
                <List>
                  <Anchor href="#">
                    {" "}
                    <IconYoutube />{" "}
                  </Anchor>
                </List>
              </IconNButtonFlexContainerStyled>

              <IconNButtonFlexContainerStyled style={{ marginTop: "3rem" }}>
                <List>
                  <Anchor href="#">
                    {" "}
                    <PlayStoreBtnContainerStyled>
                      {" "}
                      <Img src={data.googlePlayButton} />{" "}
                    </PlayStoreBtnContainerStyled>{" "}
                  </Anchor>
                </List>
                <List>
                  <Anchor href="#">
                    {" "}
                    <PlayStoreBtnContainerStyled>
                      {" "}
                      <Img src={data.applePlayButton} />{" "}
                    </PlayStoreBtnContainerStyled>{" "}
                  </Anchor>
                </List>
              </IconNButtonFlexContainerStyled>
            </CategorieContainer>
          </FooterContainerStyled>
        </ContentContainer>
      </FooterSectionStyled>

      <FooterSectionStyled chngcolor={"true"}>
        <ContentContainer widthc={"true"}>
          <FlexContainerSecondaryFooterStyled>
            <FlexSectionContainerStyled hide={"true"}>
              <OfficialLinksTitleStyled variant="subtitle1">
                {data.linksTitle}
              </OfficialLinksTitleStyled>
              <div style={{ display: "flex" }}>
                <LinkTextStyled variant="subtitle1">
                  <Anchor href="#">{data.linksText[0]}</Anchor>
                  {data.hiphen}
                </LinkTextStyled>
                <LinkTextStyled variant="subtitle1">
                  <Anchor href="#">{data.linksText[1]}</Anchor>
                  {data.hiphen}
                </LinkTextStyled>
                <LinkTextStyled variant="subtitle1">
                  <Anchor href="#">{data.linksText[2]}</Anchor>
                  {data.hiphen}
                </LinkTextStyled>
                <LinkTextStyled variant="subtitle1">
                  <Anchor href="#">{data.linksText[3]}</Anchor>
                </LinkTextStyled>
              </div>
            </FlexSectionContainerStyled>

            <FlexSectionContainerStyled>
              <AboutTextStyled variant="subtitle1">
                {" "}
                {data.aboutText}
              </AboutTextStyled>
              <CopyrightTextStyled variant="subtitle1">
                {" "}
                {data.copyright}
              </CopyrightTextStyled>
            </FlexSectionContainerStyled>
          </FlexContainerSecondaryFooterStyled>
        </ContentContainer>
      </FooterSectionStyled>
    </>
  );
};

export default DesktopFooter;
