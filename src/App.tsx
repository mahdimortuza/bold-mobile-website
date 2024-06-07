import React from "react";
import BoldIntroduction from "./components/bold-introduction";
import { Footer, Header } from "./global";
import HeroSection from "./components/hero-section";
import TrustedWebsite from "./components/trusted-website";
import FeatureList from "./components/feature-list";
import { Box } from "@mui/material";
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BoldIntroduction />
      <Box sx={{ marginTop: { xs: 30, sm: 80, md: 80 } }}>
        {" "}
        <FeatureList />
      </Box>
      <TrustedWebsite />
      <Footer />
    </>
  );
};
export default App;
