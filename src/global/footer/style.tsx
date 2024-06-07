import { Box, Grid, styled } from "@mui/material";
export const FooterMain = styled("footer")(({ theme }) => ({
  padding: theme.spacing(10, 2, 0, 2),
  marginTop: theme.spacing(7),
  maxWidth: 1280,
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: 1280,
  },
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #d5d7db",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "baseline",
    paddingBottom: theme.spacing(1),
  },
}));

export const FooterColumn = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  textAlign: "center",

  "& h6": {
    marginBottom: theme.spacing(1),
  },
  "& p": {
    fontSize: 18,
    color: theme.palette.text.primary,
    fontFamily: "'Open Sans', sans-serif",
  },
  ".social-icon": {
    width: 29,
    height: 29,
  },
}));

export const FooterCredits = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(4),

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },

  "& .MuiTypography-body2": {
    padding: theme.spacing(2, 0, 0, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0),
    },
  },
  "& p": {
    color: "#787878",
    fontSize: 18,
    fontFamily: "'Open Sans', sans-serif",
  },
  "& b": {
    color: "black",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 900,
    fontSize: 18,
    paddingRight: 2,
    display: "inline-flex",
  },
}));

export const FooterBrandContent = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
  " > img": {
    display: "flex",
    width: 46,
    height: 21,
    opacity: 0.7,
  },
  ".list-text": {
    display: "inline-block",
    fontSize: 18,
    color: theme.palette.text.primary,
    fontFamily: "'Open Sans', sans-serif",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
      paddingRight: theme.spacing(2),
      marginRight: "auto",
      paddingLeft: 30,
    },
  },
  ".list-text-border": {
    // borderBottom: "1px solid #ccc",
    position: "relative",
    paddingBottom: theme.spacing(0.6),
    color: "black",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "1px",
      background: "linear-gradient(to right, #60aef8, #f46692 50%, #f3a562)",
      [theme.breakpoints.up("sm")]: {
        height: "0px",
      },
    },
    "&:hover::after": {
      height: "3px",
    },
  },
  ".MuiListItem-root": {
    padding: theme.spacing(1, 3, 1, 0),
    width: "fit-content",
  },
  ".copyright": {
    fontSize: 18,
    fontFamily: "'Open Sans', sans-serif",
    color: "#787878",
  },
}));
