import React from "react";
import {
  ListingSection as SectionListing,
  MainHeadingStyled,
  CardStyled,
  CardImageStyled,
  PriceStyled,
  ListingDetailTextStyled,
  LocationNTimeTextStyled,
  LocationNTimeWrapperStyled,
  CardImageContainerStyled,
  CardInfoSectionStyled,
  CardWrapperStyled,
} from "./styled";
import ContentContainer from "../../../components/Common/ContentContainer/index";
import CardData from "./dummyData";
import { Grid } from "@mui/material";

const ListingSection = ({ listingSectionContent }) => {
  const data = listingSectionContent;
  const dataCard = CardData;
  return (
    <SectionListing>
      <ContentContainer widthc={"true"}>
        <MainHeadingStyled variant="h3">{data.mainHeading}</MainHeadingStyled>
        <Grid container spacing={3}>
          {dataCard.map((item, index) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                xl={3}
                sm={6}
                xs={6}
                xxs={12}
                key={index}
              >
                <CardWrapperStyled href="#">
                  <CardStyled>
                    <CardImageContainerStyled>
                      <CardImageStyled src={item.listingImage} />
                    </CardImageContainerStyled>
                    <CardInfoSectionStyled>
                      <PriceStyled variant="h4">{item.price}</PriceStyled>
                      <ListingDetailTextStyled variant="p">
                        {item.desc}
                      </ListingDetailTextStyled>
                      <LocationNTimeWrapperStyled>
                        <LocationNTimeTextStyled>
                          {item.locationName}
                        </LocationNTimeTextStyled>
                        <LocationNTimeTextStyled>
                          {item.date}
                        </LocationNTimeTextStyled>
                      </LocationNTimeWrapperStyled>
                    </CardInfoSectionStyled>
                  </CardStyled>
                </CardWrapperStyled>
              </Grid>
            );
          })}
        </Grid>
      </ContentContainer>
    </SectionListing>
  );
};

export default ListingSection;
