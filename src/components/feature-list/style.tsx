import { Box, styled, Grid, Card } from "@mui/material";

export const StyledFeatureList = styled(Box)(({ theme }) => ({
  maxWidth: 1170,
  marginRight: "auto",
  marginLeft: "auto",
  padding: theme.spacing(3, 2),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    maxWidth: 1280,
  },
  ".feature-heading": {
    fontSize: 38,
    textAlign: "center",
    fontFamily: "Manrope, sans-serif",
    backgroundImage: "linear-gradient(111deg, #60aef8, #f46692 50%, #f3a562)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    lineHeight: 1.2,
    WebkitTextFillColor: "transparent",
    fontWeight: 800,
    margin: theme.spacing(5, 1, 1.3, 1),
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 70,
    },
  },
  ".feature-desc": {
    textAlign: "center",
    opacity: 0.9,
    color: theme.palette.text.primary,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 18,
    lineHeight: 1.2,
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    margin: "auto",
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
}));

export const CardItemContent = styled(Box)(({ theme }) => ({
  fontFamily: "'Open Sans', sans-serif",
  color: theme.palette.text.primary,
  zIndex: 1,
  padding: theme.spacing(4.6),
  marginTop: "auto",
  " > h4": {
    fontSize: 28,
    fontWeight: 800,
    lineHeight: 1.3,
    fontFamily: "Manrope, sans-serif",
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      fontSize: 38,
    },
  },
  " > p": {
    fontSize: 18,
    opacity: 1,
    margin: theme.spacing(1, 0),
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: "'Open Sans', sans-serif",
    color: theme.palette.text.primary,
  },
}));
export const CardItems = styled(Card)(({ theme }) => ({
  height: "100%",
  maxWidth: "auto",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 20px 40px 0 rgba(0, 0, 0, 0.05)",
  background: "#fcfdff",
  borderRadius: 20,
  overflow: "hidden",
  " .feature-img": {
    width: "100%",
    marginTop: 20,
    objectFit: "cover",
    objectPosition: "50% 0%",
    opacity: 1,
  },

  ".feature-two-img": {
    width: "100%",
    objectFit: "cover",
    objectPosition: "50% 0%",
    opacity: 1,
  },
}));

export const QuickActionCards = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const QuickActionCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#fcfdff",
  margin: "auto",
  justifyContent: "center",
  boxShadow: "0 20px 40px 0 rgba(0, 0, 0, 0.05)",
  textAlign: "center",
  borderRadius: 20,
  padding: theme.spacing(4),
  [theme.breakpoints.between("sm", "md")]: {
    minHeight: 300,
  },
  "> img": {
    marginBottom: theme.spacing(1.2),
  },
  "> p": {
    fontSize: 18,
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: 1.2,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1.2),
  },
  "> h6": {
    fontSize: 20,
    fontFamily: "Manrope, sans-serif",
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
}));
