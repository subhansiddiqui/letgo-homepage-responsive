import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

//*=======Importing Icons from Mui =======
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{ fontSize: "2.4rem", marginRight: "3%" }}
        color="text.secondary"
      />
    }
    {...props}
  />
))(({ theme }) => ({
  minHeight: "fit-content",
  backgroundColor: theme.palette.common.white,
  flexDirection: "row",
  padding: "1.4rem 0rem",
  maxWidth: "1220px",

  paddingLeft: "0.4rem",
  paddingRight: "0.4rem",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: "0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  padding: "1.4rem 0rem",
  maxWidth: "1220px",

  paddingLeft: "0.4rem",
  paddingRight: "0.4rem",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

const FooterSectionStyled = styled("section")(({ theme, ...props }) => ({
  marginTop: "5rem",
}));

const CategorieListsContainerStyled = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  listStyleType: "none",
  flexDirection: "column",
  gap: "1rem",
}));

const ListTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fontWeight: 300,
}));

//1px solid #e0e0e0

const SectionFollowNDownlaod = styled("section")(({ theme, ...props }) => ({}));
const FollowUsWrapper = styled("div")(({ theme, ...props }) => ({
  borderTop: "1px solid #e0e0e0",
  borderBottom: "1px solid #e0e0e0",
}));
const FollowUsFlexContainerStyled = styled("section")(
  ({ theme, ...props }) => ({
    padding: "1.4rem 0rem",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    alignItems: "center",
  })
);

const DownloadAppWrapperStyled = styled("div")(({ theme, ...props }) => ({
  borderTop: "1px solid #e0e0e0",
}));
const DownloadAppFlexContainerStyled = styled("section")(
  ({ theme, ...props }) => ({
    padding: "1.4rem 0rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  })
);

const FollowUsTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,
  fontWeight: 300,
}));
const IconNButtonFlexContainerStyled = styled("ul")(({ theme, ...props }) => ({
  listStyleType: "none",
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  marginTop: "0.4rem",
}));

const List = styled("li")(({ theme, ...props }) => ({}));
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

const Anchor = styled("a")(({ theme, ...props }) => ({
  textDecoration: "none",
  color: "inherit",

  ":hover": {
    color: "inherit",
  },
}));

//16px 24px p
export {
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
};
