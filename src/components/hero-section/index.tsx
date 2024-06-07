import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography, styled } from "@mui/material";
import AppIcon from "../../assets/images/604bec86217013e5a00ae099_App-Icon.svg";
import AndroidIcon from "../../assets/images/604cf52f84f8f84bb92cde4e_Android-Icon.svg";
import AppleIcon from "../../assets/images/604cf52ff6f5c04c33cca6ad_Apple-Icon.svg";

import LeftEllipse from "../../assets/images/604be9fb9ce09119bd327a63_Ellipse-1.png";
import RightEllipse from "../../assets/images/604be9fba35a421e863d3945_Ellipse-2.png";
const StyledHeroSection = styled(motion(Box))(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(0),
  padding: theme.spacing(0, 2),
  borderRadius: theme.spacing(2),
  textAlign: "center",

  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    maxWidth: 900,
    margin: "auto",
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(6),
  },

  ".hero-heading": {
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,
    marginTop: 20,
    marginBottom: 10,
    color: theme.palette.text.primary,
    fontFamily: "Manrope, sans-serif",

    [theme.breakpoints.up("sm")]: {
      fontSize: 75,
    },
  },

  ".hero-description": {
    color: theme.palette.text.primary,
    fontSize: 18,
    lineHeight: 1.2,
    fontWeight: 400,
    fontFamily: "Open Sans, sans-serif",

    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1, 8),
    },
  },
}));

const StyledAppIcon = styled(motion(Box))(({ theme }) => ({
  width: 80,
  height: 80,
  backgroundImage: "linear-gradient(90deg, #fa5853, #f46692 50%, #ffc444)",
  justifyContent: "center",
  margin: "auto",
  borderRadius: "50%",
  padding: theme.spacing(2.5),
  display: "flex",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    width: 100,
    height: 100,
  },
}));

const DownloadBtn = styled(motion(Box))(({ theme }) => ({
  margin: theme.spacing(6, 0, 7, 0),
  display: "inline-flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignContent: "center",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const StyledButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  borderRadius: 7,
  padding: theme.spacing(1.3, 2),
  fontSize: 16,
  fontFamily: "'Open Sans', sans-serif",
  justifyContent: "flex-start",
  textAlign: "left",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: theme.palette.common.black,
    boxShadow: "none",
  },
}));
const RightEllipseImage = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  position: "absolute",
  left: "auto",
  top: "0%",
  bottom: "auto",
  zIndex: -1,
  width: 650,
  height: 650,
  backgroundImage: `url(${RightEllipse})`, // Added $ before the parentheses

  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  right: -560,
  transform:
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(149.274deg) skew(0deg, 0deg)",
}));

const LeftEllipseImage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "5em",
  right: "auto",
  bottom: "auto",
  zIndex: -1,
  width: 520,
  height: 650,
  backgroundImage: `url(${LeftEllipse})`, // Added $ before the parentheses
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  left: -450,
  transform:
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(68.3424deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
  willChange: "transform",
}));

const EllipseContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "0%",
  top: "0%",
  right: "0%",
  bottom: "0%",
  zIndex: -1,
  overflow: "hidden",
}));

const HeroSection = () => {
  return (
    <>
      <EllipseContainer>
        <LeftEllipseImage />
        <RightEllipseImage />
      </EllipseContainer>
      <StyledHeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <StyledAppIcon
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <img src={AppIcon} alt="App Icon" />
        </StyledAppIcon>
        <Typography variant="h4" className="hero-heading">
          Manage it all, in this all new system.
        </Typography>
        <Typography variant="body1" className="hero-description">
          Bold keeps your team’s work on-brand, on message, and on time.
          Innovative features make creating and sharing your work feel
          effortless.
        </Typography>

        <DownloadBtn>
          <StyledButton variant="contained">
            <img src={AppleIcon} alt="Apple Icon" style={{ paddingRight: 8 }} />
            Download for iOS
          </StyledButton>
          <StyledButton variant="contained">
            <img
              src={AndroidIcon}
              alt="Android Icon"
              style={{ paddingRight: 8 }}
            />
            Download for Android
          </StyledButton>
        </DownloadBtn>
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;
