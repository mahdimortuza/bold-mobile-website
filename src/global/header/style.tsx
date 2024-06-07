import { AppBar, styled, Button } from "@mui/material";

const commonButtonStyles = {
  borderRadius: "5px",
  transition: "letter-spacing 300ms ease, color 300ms ease",
  fontFamily: "Open Sans, sans-serif",
  fontSize: 18,
  boxShadow: "none",
  backgroundImage: "linear-gradient(90deg, #fa5853, #f46692 50%, #ffc444)",
};

export const StyledMobileButton = styled(Button)(({ theme }) => ({
  ...commonButtonStyles,
  padding: "8px 16px",
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  color: "#fff",
  minWidth: 180,
  textDecoration: "none",
  ".mobile-btn-text": {
    fontWeight: 700,
    fontSize: 18,
  },
  ".mobile-btn-text-2": {
    fontSize: theme.typography.h6,

    fontWeight: 500,
    textTransform: "none",
    marginLeft: theme.spacing(1),
  },
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export const StyledDesktopButton = styled(Button)(({ theme }) => ({
  ...commonButtonStyles,
  marginLeft: "auto",
  marginRight: theme.spacing(2),
  padding: theme.spacing(1.2, 1),
  textDecoration: "none",
  minWidth: 180,
  ".desktop-btn-text": {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  ".desktop-btn-text-2": {
    fontSize: 18,
    textTransform: "none",
    marginLeft: 5,
    color: theme.palette.common.white,
    fontWeight: 500,
  },
}));

export const StyledMobileAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  backgroundColor: theme.palette.common.white,
  zIndex: 9999999,
  margin: theme.spacing(0.9, 0),
  paddingBottom: theme.spacing(1),
  ".mobile-menu-list": {
    color: theme.palette.text.primary,
    "& .MuiListItemText-primary": {
      fontWeight: 700,
      fontFamily: "Open Sans, sans-serif",
      opacity: 0.8,
    },
  },
  ".mobile-logo": {
    marginTop: theme.spacing(0.2),
  },
  ".mobile-menu": {
    backgroundImage: "linear-gradient(132deg, #fa5853, #f46692 49%, #ffc444)",
    borderRadius: "10px !important",
    width: 60,
    height: 60,
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(0.1),
  },
}));

export const StyledDesktopAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.common.white,
  zIndex: 1 ,
  maxWidth: 1315,
  margin: "auto",
  paddingBottom: theme.spacing(0.8),
  color: "black",
  ".desktop-list-container": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: theme.spacing(1.5, 0.5),
    justifyContent: "space-between",
  },
  ".desktop-menu-list": {
    display: "flex",
    opacity: 0.8,
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(5),
    gap: "32px",
    color: theme.palette.text.primary,
  },
}));
