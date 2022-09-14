import { styled, Typography } from "@mui/material";
//*=======Importing Icons from Mui =======
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterSectionStyled = styled("section")(({ theme, ...props }) => ({
  backgroundColor: props.chngcolor
    ? theme.palette.primary.main
    : theme.palette.common.white,
}));

const FooterContainerStyled = styled("nav")(({ theme, ...props }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  alignItems: "flex-start",
  justifyContent: "center",
  marginTop: "6rem",
}));

const CategorieContainer = styled("div")(({ theme, ...props }) => ({}));
const CategorieTitleStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  textTransform: "uppercase",
}));

const CategorieListsContainerStyled = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  listStyleType: "none",
  flexDirection: "column",
  gap: "0.6rem",
  marginTop: "1rem",
}));

const CategorieList = styled("li")(({ theme, ...props }) => ({}));

const ListTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
}));

const LinkTextWrapperStyled = styled("a")(({ theme, ...props }) => ({
  textDecoration: "none",
  color: "inherit",

  ":hover": {
    color: "inherit",
  },
}));

const IconNButtonFlexContainerStyled = styled("ul")(({ theme, ...props }) => ({
  listStyleType: "none",
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  marginTop: "0.4rem",
}));

const PlayStoreBtnContainerStyled = styled("div")(({ theme, ...props }) => ({
  maxWidth: "8.6rem",
}));

const Img = styled("img")(({ theme, ...props }) => ({}));

const IconFacebook = styled(FacebookIcon)(({ theme, ...props }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));
const IconInsta = styled(InstagramIcon)(({ theme, ...props }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));
const IconTwitter = styled(TwitterIcon)(({ theme, ...props }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));
const IconYoutube = styled(YouTubeIcon)(({ theme, ...props }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));

const FlexContainerSecondaryFooterStyled = styled("div")(
  ({ theme, ...props }) => ({
    padding: "1.6rem 0rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2rem",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
      flexDirection: "column",
      gap: "1rem",
    },
  })
);

const FlexSectionContainerStyled = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  gap: "0.8rem",

  //   [theme.breakpoints.down("lg")]: {
  //     display: props.hide && "none",
  //     visibility: props.hide && "none",
  //   },
}));

const OfficialLinksTitleStyled = styled(Typography)(({ theme, ...props }) => ({
  fontWeight: 700,
  color: theme.palette.common.white,
}));

const LinkTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.white,
  marginLeft: "0.4rem",
}));

const AboutTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
}));
const CopyrightTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.white,
}));
export {
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
  FlexContainerSecondaryFooterStyled,
  FlexSectionContainerStyled,
  OfficialLinksTitleStyled,
  LinkTextStyled,
  AboutTextStyled,
  CopyrightTextStyled,
};
