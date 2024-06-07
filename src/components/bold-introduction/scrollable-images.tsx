import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Slide, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

import IphoneBody from "../../assets/images/604ce94df02e1e447d32686d_Apple iPhone 11 Pro Space Grey 1-p-500.png";
import LockScreen from "../../assets/images/604d43119ce091cb1037818c_LockScreen-Light-p-800.jpg";
import ChatListScreen from "../../assets/images/604d4b5ee9f5d3561967d646_ChatList-White-p-500.jpg";

interface BoldIntroductionProps {
  matches?: boolean;
  fallDown?: boolean;
  animate?: boolean;
  firstScale?: boolean;
  decreaseDivider?: boolean;
  moveToTop?: any;
}

const StyledLeftText = styled(Typography)<BoldIntroductionProps>(
  ({ matches, theme }) => ({
    whiteSpace: "nowrap",
    textAlign: matches ? "center" : "left",
    background: `linear-gradient(to right, #fa5853, #f46692)`,
    WebkitBackgroundClip: "text",
    fontWeight: 800,
    fontFamily: "Manrope, sans-serif",
    WebkitTextFillColor: "transparent",
    fontSize: "70px",
    lineHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingRight: 20,
    },
  })
);
const StyledOrigin = styled(motion.div)<BoldIntroductionProps>(
  ({ matches, animate, theme }) => ({
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.5s ease-in-out",
    transformOrigin: matches ? "center" : "right",
    initial: { scale: 1 }, // Initial state
    animate: { scale: animate ? 1.5 : 1.3 }, // Target state based on 'animate' prop
    [theme.breakpoints.up("sm")]: {
      animate: { scale: animate ? 1.5 : 1.3 }, // Adjust scale for larger screens
    },
  })
);

const StyledCenter = styled(motion.div)<BoldIntroductionProps>(
  ({ matches, animate, theme }) => ({
    position: "relative",
    overflow: "hidden",
    width: "50%",
    transition: "transform 0.5s ease-in-out",
    transformOrigin: matches ? "center" : "left",
    initial: { scale: 1 }, // Initial state
    animate: { scale: animate ? 1.5 : 1.3 }, // Target state based on 'animate' prop
    [theme.breakpoints.up("sm")]: {
      animate: { scale: animate ? 1.5 : 1.3 }, // Adjust scale for larger screens
    },
  })
);

const StyledRightText = styled(Typography)<BoldIntroductionProps>(
  ({ matches, theme }) => ({
    whiteSpace: "nowrap",
    textAlign: matches ? "center" : "left",
    background: `linear-gradient(to right, #f46692, #ffc444)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 800,
    fontFamily: "Manrope, sans-serif",
    fontSize: "70px",
    lineHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
    },
  })
);

const StyledTextSection = styled(Box)<BoldIntroductionProps>(
  ({ matches, animate }) => ({
    background: `linear-gradient(to right, #fa5853, #f46692 50%, #ffc444)`,
    width: matches ? "18%" : "1px",
    height: matches ? "70%" : "70%",
    alignSelf: "center",
    transformOrigin: "center",
    transform: animate ? "scale(1.5)" : "scale(1)",
    transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  })
);

const StyledImageContainer = styled(motion.div)<{ showImage: boolean }>(
  ({ showImage }) => ({
    position: "absolute",
    top: "62%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: showImage ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    zIndex: 2,
  })
);

const StyledImage = styled("img")({
  maxWidth: "100px",
  maxHeight: "100%",
  objectFit: "contain",
});

const ScrollableImages: React.FC<{
  matches: boolean;
  animate: boolean;
  showImage: boolean;
}> = ({ matches, animate, showImage }) => {
  return (
    <>
      <StyledOrigin matches={matches} animate={animate}>
        <Slide direction={matches ? "right" : "left"} in={true} timeout={1000}>
          <StyledLeftText variant="body1" matches={matches}>
            Meet
          </StyledLeftText>
        </Slide>
      </StyledOrigin>
      <StyledTextSection matches={matches} animate={animate}>
        <Divider
          orientation={matches ? "horizontal" : "vertical"}
          flexItem
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
        <StyledImageContainer showImage={showImage}>
          <StyledImage src={IphoneBody} alt="Your Image" />
          <motion.img
            src={LockScreen}
            alt="Your Image"
            style={{
              position: "absolute",
              left: 7,
              borderRadius: 5,
              top: 8,
              zIndex: -1,
              width: "85px",
              height: "90%",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={ChatListScreen}
            alt="Your Image"
            style={{
              position: "absolute",
              left: 7,
              borderRadius: 5,
              top: 0,
              zIndex: -2,
              width: "85px",
              height: "90%",
            }}
          />
        </StyledImageContainer>
      </StyledTextSection>
      <StyledCenter matches={matches} animate={animate}>
        <Slide direction={matches ? "left" : "right"} in={true} timeout={1000}>
          <StyledRightText variant="body1" matches={matches}>
            Bold
          </StyledRightText>
        </Slide>
      </StyledCenter>
    </>
  );
};

export default ScrollableImages;
