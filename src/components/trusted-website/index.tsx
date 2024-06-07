import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import {
  StyleBottomOverlay,
  StyledAbout,
  StyledAboutContainer,
  StyledDescription,
  StyledTrustGrid,
  StyleFadeInScoll,
  StyleItemHeader,
  StyleStickyContent,
  StyleTrustedContent,
  StyleTrustedContentList,
  StyleTrustedItem,
  StyleTrustedOverlay,
} from "./style";

const TrustedWebsite = () => {
  const data = [
    {
      id: 2,
      heading: "5.0",
      subheading: "review average in our app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna, sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a varius.",
    },
    {
      id: 3,
      heading: "35+",
      subheading: "minutes per session",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna, sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a varius.",
    },
    {
      id: 4,
      heading: "$0.00",
      subheading: "everything is FREE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna, sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a varius.",
    },
    {
      id: 5,
      heading: "9k",
      subheading: "New businesses /m",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna, sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a varius.",
    },
  ];

  return (
    <Fragment>
      <StyledAbout>
        <StyledAboutContainer>
          <StyledTrustGrid>
            <StyleTrustedContent>
              <StyleStickyContent>
                <StyleFadeInScoll>
                  <h2>We are trusted by thousands of people</h2>
                </StyleFadeInScoll>
                <p>
                  Lean on Stories+ to maximize the value of your most compelling
                  social content
                </p>
              </StyleStickyContent>
            </StyleTrustedContent>
            <StyleTrustedContentList>
              <StyleTrustedOverlay>
                <StyleBottomOverlay></StyleBottomOverlay>
              </StyleTrustedOverlay>
              {data.map((item) => (
                <StyleTrustedItem>
                  <StyleItemHeader>
                    <Typography variant="h2">{item.heading}</Typography>

                    <Typography variant="h5">{item.subheading}</Typography>
                  </StyleItemHeader>
                  <StyledDescription>
                    <p>{item.description}</p>
                  </StyledDescription>
                </StyleTrustedItem>
              ))}
            </StyleTrustedContentList>
          </StyledTrustGrid>
        </StyledAboutContainer>
      </StyledAbout>
    </Fragment>
  );
};

export default TrustedWebsite;
