import { styled, Button } from "@mui/material";
//*=======Importing Icons from Mui =======
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const NavHeaderStyled = styled("header")(({ theme, ...props }) => ({
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  background: theme.palette.common.white,
  zIndex: 999,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px 0px",
}));
const NavContainerStyled = styled("nav")(({ theme, ...props }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 0rem",
  paddingBottom: "0.4rem",
}));
const FlexContainerStyled = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const LogoImageWrapperStyled = styled("div")(({ theme }) => ({
  width: "4.3rem",
  height: "2.8rem",
}));
const Image = styled("img")(({ theme }) => ({}));

const IconMenu = styled(MenuIcon)(({ theme }) => ({
  fontSize: "2.4rem",
  color: theme.palette.text.secondary,
}));
const LocationButtonStyled = styled(Button)(({ theme }) => ({
  ...theme.typography.p,
  color: theme.palette.text.secondary,
  backgroundColor: "white",

  fontWeight: 600,
  cursor: "pointer",
  textTransform: "none",

  ":hover": {
    color: theme.palette.text.secondary,

    backgroundColor: "white",
  },
}));

const IconLocation = styled(LocationOnIcon)(({ theme }) => ({
  fontSize: "2.4rem",
  color: theme.palette.text.secondary,
}));

const SearchBoxContainerStyled = styled("div")(({ theme }) => ({
  border: "1px solid #e0e0e0",
  borderRadius: "0.4rem",
  padding: "0rem 0.8rem",
  display: "flex",
  gap: "0.6rem",
  alignItems: "center",
  marginBottom: "0.8rem",
}));

const IconSearch = styled(SearchIcon)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.secondary,
}));

const SearchInputStyled = styled("input")(({ theme }) => ({
  ...theme.typography.p,
  fontSize: "1.6rem",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,
  padding: "1.2rem 0rem",
  border: "none",
  width: "100%",
  ":focus-visible": {
    outline: "none",
  },
  marginRight: "auto",
}));

export {
  NavHeaderStyled,
  NavContainerStyled,
  FlexContainerStyled,
  LogoImageWrapperStyled,
  Image,
  IconMenu,
  LocationButtonStyled,
  IconLocation,
  SearchBoxContainerStyled,
  IconSearch,
  SearchInputStyled,
};
