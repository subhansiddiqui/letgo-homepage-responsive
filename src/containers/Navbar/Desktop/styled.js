import { styled, Typography, Button } from "@mui/material";
//*=======Importing Icons from Mui =======
// import LanguageIcon from "@mui/icons-material/Language";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import TuneIcon from "@mui/icons-material/Tune";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const NavsContainerStyled = styled("header")(({ theme, ...props }) => ({}));

const NavPrimaryStyled = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  background: theme.palette.common.white,

  zIndex: 999,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px 0px",

  // ".main__container": {
  //   maxWidth: theme.breakpoints.lg,
  //   // width: "0 auto",

  //   padding: "0 2rem",
  //   // position : 'sticky',
  //   // top : 10
  //   position: "fixed",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  // },
  // nav: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   padding: "2rem 0",

  //   ".logo": {
  //     display: "flex",
  //     alignItems: "center",
  //     ".logo__text": {
  //       fontSize: "2.5rem",
  //       color: "#fff",
  //       marginLeft: "1.6rem",
  //     },
  //   },

  //   ul: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "6.7rem",

  //     li: {
  //       color: "red",
  //       listStyle: "none",

  //       a: {
  //         textDecoration: "none",
  //         color: "#fff",
  //         fontSize: "1.4rem",
  //       },
  //     },
  //   },
  // },
}));
const NavSecondaryStyled = styled("div")(({ theme, ...props }) => ({
  marginTop: "7.3rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px 0px",
}));

const Nav1Styled = styled("nav")(({ theme, ...props }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingTop: "0.8rem",
  //   paddingBottom: "0.8rem",
  // 10 16 10 16 p
  padding: "1rem 0rem",
}));
const LogoImageWrapperStyled = styled("div")(({ theme }) => ({
  width: "7.4rem",
  height: "4.8rem",
  marginRight: "1.6rem",
}));
const Image = styled("img")(({ theme }) => ({}));
const LocationSearchInputContainerStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: "1px solid #e0e0e0",
  borderRadius: "0.4rem",
  display: "flex",
  alignItems: "center",
  padding: "0rem 0.5rem",
  marginRight: "1.6rem",
}));
const IconLocation = styled(LocationOnIcon)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));

const IconArrowDown = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));
const InputLocationStyled = styled("input")(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  padding: "1.2rem 0.8rem",
  fontWeight: 300,
  maxWidth: "18rem",
  border: "none",
  ":focus-visible": {
    border: "none",
    outline: "none",
  },
}));

const SearchIconContainerStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  padding: "1.2rem",
  borderRadius: "0.4rem",
  marginLeft: "-7px",
}));

const IconSearch = styled(SearchIcon)(({ theme }) => ({
  fontSize: "2.4rem",
  color: theme.palette.common.white,
}));

const GoodsSearchInputContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 2,
  marginRight: "3rem",
}));

const InputGoodsStyled = styled("input")(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  padding: "1.2rem 0.8rem",
  border: "1px solid #e0e0e0",
  borderRadius: "0.4rem",
  fontWeight: 300,
  width: "100%",
  ":focus-visible": {
    outline: "none",
  },
}));
const TextButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.primary.main,
  fontWeight: 700,
  cursor: "pointer",
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
  ":hover": {
    textDecoration: `1.5px underline solid ${theme.palette.primary.main}`,
    textUnderlineOffset: "6px",
    backgroundColor: "white",
  },
}));

const CtaButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: "1.6rem",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: "0.8rem 1.8rem",
  borderRadius: "2.4rem",
  fontWeight: 700,
  border: "4px solid #fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
  ":hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const IconCamera = styled(PhotoCameraIcon)(({ theme }) => ({
  fontSize: "2.4rem",
  color: "inherit",
}));
const Nav2Styled = styled("nav")(({ theme }) => ({
  width: "100%",
}));
const OptionsContainerStyled = styled("ul")(({ theme }) => ({
  width: "100%",
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  // border: "1px solid red",
  padding: "0.4rem 0rem",
  paddingBottom: "0.8rem",
}));
const OptionDifferStyled = styled("li")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
}));
const OptionStyled = styled("li")(({ theme }) => ({}));
const OptionTextStyled = styled(Typography)(({ theme, ...props }) => ({
  fontWeight: props.incweight && 700,
  color: theme.palette.text.primary,
}));

export {
  Nav1Styled,
  LogoImageWrapperStyled,
  Image,
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
  NavsContainerStyled,
  NavPrimaryStyled,
  NavSecondaryStyled,
  Nav2Styled,
  OptionsContainerStyled,
  OptionDifferStyled,
  OptionStyled,
  OptionTextStyled,
};
