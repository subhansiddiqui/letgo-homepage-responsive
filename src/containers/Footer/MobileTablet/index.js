// function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <AccordionC
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummaryC aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummaryC>
//         <AccordionDetailsC>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailsC>
//       </AccordionC>
//       <AccordionC
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummaryC aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummaryC>
//         <AccordionDetailsC>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailsC>
//       </AccordionC>
//       <AccordionC
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummaryC aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummaryC>
//         <AccordionDetailsC>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetailsC>
//       </AccordionC>
//     </div>
//   );
// }

// function SimpleAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FooterSectionStyled,
  SectionFollowNDownlaod,
  FollowUsWrapper,
  FollowUsFlexContainerStyled,
  DownloadAppWrapperStyled,
  DownloadAppFlexContainerStyled,
  FollowUsTextStyled,
  FollowUsTextStyled as SummaryText,
  IconNButtonFlexContainerStyled,
  List,
  PlayStoreBtnContainerStyled,
  Img,
  IconFacebook,
  IconInsta,
  IconTwitter,
  IconYoutube,
  Anchor,
  CategorieListsContainerStyled,
  ListTextStyled,
} from "./styled";
import ContentContainer from "../../../components/Common/ContentContainer/index";

import FooterContent from "../../../siteContent/Footer/FooterContent";

const MobileFooter = () => {
  const data = FooterContent;
  return (
    <FooterSectionStyled>
      {/* // ! 1 */}
      <Accordion>
        <AccordionSummary>
          <SummaryText variant="p">{data.categorie1.title}</SummaryText>
        </AccordionSummary>
        <AccordionDetails>
          <CategorieListsContainerStyled>
            {data.categorie1.options.map((item, index) => {
              return (
                <List key={index}>
                  <Anchor href="#">
                    <ListTextStyled variant="p">{item}</ListTextStyled>
                  </Anchor>
                </List>
              );
            })}
          </CategorieListsContainerStyled>
        </AccordionDetails>
      </Accordion>

      {/* // ! 2 */}

      <Accordion>
        <AccordionSummary>
          <SummaryText variant="p">{data.categorie2.title}</SummaryText>
        </AccordionSummary>
        <AccordionDetails>
          <CategorieListsContainerStyled>
            {data.categorie2.options.map((item, index) => {
              return (
                <List key={index}>
                  <Anchor href="#">
                    <ListTextStyled variant="p">{item}</ListTextStyled>
                  </Anchor>
                </List>
              );
            })}
          </CategorieListsContainerStyled>
        </AccordionDetails>
      </Accordion>
      {/* // ! 3 */}

      <Accordion>
        <AccordionSummary>
          <SummaryText variant="p">{data.categorie3.title}</SummaryText>
        </AccordionSummary>
        <AccordionDetails>
          <CategorieListsContainerStyled>
            {data.categorie3.options.map((item, index) => {
              return (
                <List key={index}>
                  <Anchor href="#">
                    <ListTextStyled variant="p">{item}</ListTextStyled>
                  </Anchor>
                </List>
              );
            })}
          </CategorieListsContainerStyled>
        </AccordionDetails>
      </Accordion>
      {/* // ! 4 */}

      <Accordion>
        <AccordionSummary>
          <SummaryText variant="p">{data.categorie4.title}</SummaryText>
        </AccordionSummary>
        <AccordionDetails>
          <CategorieListsContainerStyled>
            {data.categorie4.options.map((item, index) => {
              return (
                <List key={index}>
                  <Anchor href="#">
                    <ListTextStyled variant="p">{item}</ListTextStyled>
                  </Anchor>
                </List>
              );
            })}
          </CategorieListsContainerStyled>
        </AccordionDetails>
      </Accordion>

      <SectionFollowNDownlaod>
        <FollowUsWrapper>
          <ContentContainer>
            <FollowUsFlexContainerStyled>
              <FollowUsTextStyled variant="p">
                {data.categorie5.title}
              </FollowUsTextStyled>

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
            </FollowUsFlexContainerStyled>
          </ContentContainer>
        </FollowUsWrapper>

        <DownloadAppWrapperStyled>
          <ContentContainer>
            <DownloadAppFlexContainerStyled>
              <IconNButtonFlexContainerStyled>
                <Anchor href="#">
                  <PlayStoreBtnContainerStyled>
                    <Img src={data.googlePlayButton} />
                  </PlayStoreBtnContainerStyled>
                </Anchor>

                <Anchor href="#">
                  <PlayStoreBtnContainerStyled>
                    <Img src={data.applePlayButton} />
                  </PlayStoreBtnContainerStyled>
                </Anchor>
              </IconNButtonFlexContainerStyled>
            </DownloadAppFlexContainerStyled>
          </ContentContainer>
        </DownloadAppWrapperStyled>
      </SectionFollowNDownlaod>
    </FooterSectionStyled>
  );
};

export default MobileFooter;
