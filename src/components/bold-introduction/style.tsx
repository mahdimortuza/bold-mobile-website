import { Box, styled, Typography } from "@mui/material";

interface BoldIntroductionProps {
  matches?: boolean;
  fallDown?: boolean;
  fadeOut?: boolean;
  animate?: boolean;
  firstScale?: boolean;
  decreaseDivider?: boolean;
}

export const StyledIntroduction = styled(Box)<BoldIntroductionProps>(
  ({ matches, fallDown, fadeOut, theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: matches ? "column" : "row",
    backgroundColor: "white",
    marginTop: "60px",
    transform: fallDown ? "translateY(900px)" : "translateY(0)",
    opacity: fadeOut ? 0 : 1,
    transition: "transform 0.5s ease-in-out",
   
  })
);

export const StyledFallDown = styled(Box)<BoldIntroductionProps>(
  ({ matches, animate, theme }) => ({
    display: "flex",
    flexDirection: matches ? "column" : "row",
    alignItems: "center",
    justifyContent: matches ? "center" : "flex-start",
    transform: animate
      ? "translateY(70px) scale(1.2)"
      : "translateY(0) scale(0.9)",
    transition: "transform 0.5s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      transform: animate
        ? "translateY(250px) scale(1.8)"
        : "translateY(0) scale(1.4)",
    },
  })
);

export const StyledLeftText = styled(Typography)<BoldIntroductionProps>(
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

export const StyledOrigin = styled(Box)<BoldIntroductionProps>(
  ({ matches, animate,theme }) => ({
    position: "relative",
    overflow: "hidden",
    // width: "50%",
    transition: "transform 0.5s ease-in-out",
    transformOrigin: matches ? "center" : "right",
    transform: animate ? "scale(1)" : "scale(1)",
    [theme.breakpoints.up("sm")]: {
      transform: animate ? "scale(1.5)" : "scale(1.3)",
    },
  })
);

export const StyledCenter = styled(Typography)<BoldIntroductionProps>(
  ({ matches, animate, theme }) => ({
    position: "relative",
    overflow: "hidden",
    width: "50%",
    transition: "transform 0.5s ease-in-out",
    transformOrigin: matches ? "center" : "left",
    transform: animate ? "scale(1)" : "scale(1)",
    [theme.breakpoints.up("sm")]: {
      transform: animate ? "scale(1.5)" : "scale(1.3)",
    },
  })
);

export const StyledRightText = styled(Typography)<BoldIntroductionProps>(
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

export const StyledTextSection = styled(Box)<BoldIntroductionProps>(
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
  })
);
