import { Box, styled } from "@mui/material";

export const StyledAbout = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(255, 255, 255)",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {},
}));

export const StyledAboutContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1170px",
  padding: "3rem 1em",
  [theme.breakpoints.up("sm")]: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1280px",
  },
}));

export const StyledTrustGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridAutoColumns: "1fr",
  width: "100%",
  gridColumnGap: "1em",
  gridRowGap: "1em",
  gridTemplateRows: "auto",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  },
}));

export const StyleTrustedContent = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "5rem",
  paddingBottom: "2rem",
  gridColumnStart: "span 3",
  gridColumnEnd: "span 3",
  gridRowStart: "span 1",
  gridRowEnd: "span 1",
  [theme.breakpoints.up("sm")]: {
    paddingBottom: "5rem",
  },
}));
export const StyleStickyContent = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: "100px",

  [theme.breakpoints.up("sm")]: {},
  " > p": {
    fontFamily: "'Open Sans', sans-serif",
    color: "#323232",
    lineHeight: 1.2,
    fontWeight: 400,
    fontSize: 24,
  },
}));
export const StyleFadeInScoll = styled(Box)(({ theme }) => ({
  opacity: 1,
  [theme.breakpoints.up("sm")]: {},

  " >h2": {
    fontFamily: "Manrope, sans-serif",
    color: "#323232",
    fontSize: 38,
    lineHeight: 1.2,
    fontWeight: 800,
    boxSizing: "border-box",
    opacity: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 70,
    },
  },

  " >div": {
    opacity: 1,
    [theme.breakpoints.up("sm")]: {
      fontSize: "70px",
    },
  },
}));

export const StyleTrustedContentList = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingBottom: "5rem",
  gridColumnStart: "span 3",
  gridColumnEnd: "span 3",
  gridRowStart: "span 1",
  gridRowEnd: "span 1",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "70vh",
  },
}));
export const StyleTrustedOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0%",
  top: "0%",
  right: "0%",
  bottom: "auto",
  width: "1px",
  height: "100%",
  opacity: 1,
  [theme.breakpoints.up("sm")]: {},
}));
export const StyleBottomOverlay = styled(Box)(({ theme }) => ({
  position: "sticky",
  left: "0%",
  top: "75px",
  right: "0%",
  bottom: "auto",
  width: "49vw",
  height: "10em",

  [theme.breakpoints.up("sm")]: {
    backgroundImage: "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0))",
  },
}));
export const StyleTrustedItem = styled(Box)(({ theme }) => ({
  display: "flex",
  WebkitBoxOrient: "vertical",
  marginBottom: "5vh",

  WebkitBoxDirection: "normal",
  flexDirection: "column",
  WebkitBoxAlign: "start",
  alignItems: "flex-start",
  [theme.breakpoints.up("sm")]: {
    marginBottom: "20vh",
  },
}));
export const StyleItemHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  opacity: 1,
  [theme.breakpoints.up("sm")]: {},

  " > h2": {
    boxSizing: "border-box",
    fontFamily: "Manrope, sans-serif",
    lineHeight: 1.2,
    fontWeight: 800,
    fontSize: 38,
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0,
    backgroundImage: "linear-gradient(128deg, #60aef8, #f46692 50%, #ffc444)",
    backgroundClip: "text",
    color: "transparent",
    [theme.breakpoints.up("sm")]: {
      fontSize: 55,
      lineHeight: 1.3,
      fontWeight: 800,
    },
  },

  " > h5": {
    color: "#323232",
    boxSizing: "border-box",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Manrope, sans-serif",
    fontSize: 24,

    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
      lineHeight: 1.3,
      fontWeight: 800,
    },
  },
}));
export const StyledDescription = styled(Box)(({ theme }) => ({
  opacity: 1,
  [theme.breakpoints.up("sm")]: {},

  " > p": {
    fontFamily: "'Open Sans', sans-serif",
    color: "#323232",
    lineHeight: 1.2,
    fontWeight: 400,
    boxSizing: "border-box",
    marginTop: 0,
    marginBottom: 10,
    fontSize: 24,
  },
}));
