import React, { useEffect, useState } from "react";
import { useMediaQuery, Slide, Divider } from "@mui/material";
import { Box, styled, Typography } from "@mui/material";
import IphoneBody from "../../assets/images/604ce94df02e1e447d32686d_Apple iPhone 11 Pro Space Grey 1-p-500.png"; // Replace with the actual path to your image file
import LockScreen from "../../assets/images/604d43119ce091cb1037818c_LockScreen-Light-p-800.jpg";
import ChatListScreen from "../../assets/images/604d4b5ee9f5d3561967d646_ChatList-White-p-500.jpg";
import { motion } from "framer-motion";
import ScrollableImages from "./scrollable-images";

interface BoldIntroductionProps {
  matches?: boolean;
  fallDown?: boolean;
  animate?: boolean;
  firstScale?: boolean;
  decreaseDivider?: boolean;
  moveToTop?: any;
}

const StyledIntroduction = styled(Box)<BoldIntroductionProps>(
  ({ matches, fallDown, theme }) => ({
    width: "100%",
    marginTop: theme.spacing(6),
    display: "flex",
    justifyContent: "center",
    flexDirection: matches ? "column" : "row",
    transition: "transform 0.5s ease-in-out",
  })
);
const StyledParent = styled(Box)<BoldIntroductionProps>(
  ({ matches, fallDown, theme, moveToTop }) => ({
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    margin: "auto",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "white",
    zIndex: 9999999,
    transform: moveToTop ? "translateY(690px)" : "translateY(0)",
    transition: "transform 0.5s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      transform: moveToTop ? "translateY(610px)" : "translateY(0)",
    },
  })
);

const StyledFallDown = styled(Box)<BoldIntroductionProps>(
  ({ matches, animate, theme }) => ({
    display: "flex",
    flexDirection: matches ? "column" : "row",
    alignItems: "center",
    justifyContent: matches ? "center" : "flex-start",
    transform: animate
      ? "translateY(190px) scale(1.2)"
      : "translateY(0) scale(0.9)",
    transition: "transform 0.5s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
      transform: animate
        ? "translateY(130px) scale(1.8)"
        : "translateY(0) scale(1.4)",
    },
  })
);

const BoldIntroduction = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [animate, setAnimate] = useState(false);
  const [fallDown, setFallDown] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [moveToTop, setMoveToTop] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setAnimate(true);
      setTimeout(() => {
        setMoveToTop(true);
      }, 1000);
    };

    const element = document.getElementById("styled-introduction");

    if (element) {
      element.addEventListener("transitionend", handleAnimationEnd);
    }

    const timers = [
      setTimeout(() => setFallDown(true), 1000),
      setTimeout(() => setShowImage(true), 3000),
    ];

    return () => {
      if (element) {
        element.removeEventListener("transitionend", handleAnimationEnd);
      }
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <StyledParent moveToTop={moveToTop}>
      <StyledIntroduction
        id="styled-introduction"
        matches={matches}
        fallDown={fallDown}
        animate={animate}
      >
        <StyledFallDown matches={matches} animate={animate}>
          <ScrollableImages
            matches={matches}
            animate={animate}
            showImage={showImage}
          />
        </StyledFallDown>
      </StyledIntroduction>
    </StyledParent>
  );
};

export default BoldIntroduction;
