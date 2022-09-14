//*=======Importing Icons from Mui =======
// import LanguageIcon from "@mui/icons-material/Language";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import TuneIcon from "@mui/icons-material/Tune";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { styled, Button } from "@mui/material";

const HeroSection = styled("section")(({ theme }) => ({
  marginTop: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "11rem",
  },
}));

const HeroContainerStyled = styled("div")(({ theme, ...props }) => ({
  //   backgroundImage: `url(${props.url})`,
  //   backgroundPosition: "50% 50%",
  //   backgroundRepeat: "no-repeat",
  //   height: "40rem",
  width: "100%",
  position: "relative",
  //   backgroundSize: "contain",
}));
const ButtonContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "3rem",
  position: "absolute",
  left: "3%",
  bottom: "16%",
}));
const CtaButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: "1.4rem",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: "1.2rem 4.8rem",
  borderRadius: "5rem",
  fontWeight: 500,
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    padding: "0.8rem 3.2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
    padding: "0.6rem 2.4rem",
  },
  ":hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
}));

export {
  HeroSection,
  HeroContainerStyled,
  ButtonContainerStyled,
  CtaButtonStyled,
};
