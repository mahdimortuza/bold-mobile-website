import { Typography, Grid, CardMedia } from "@mui/material";
import FeatureImage1 from "../../assets/images/604d2e3826e7a418da776272_Feature-Image-01.png";
import FeatureImage2 from "../../assets/images/604e5220385521ad71415047_Features-Image-2-min.png";
import QuickActionIcon from "../../assets/images/604d2edb1a63f03a2c516fde_Quick-Action-Icon.svg";
import EasyShop from "../../assets/images/604d2be272b9ab3d3b57ef0d_shopping-cart.svg";
import SafeSecure from "../../assets/images/604d2be2aca4e502d56c3db6_lock.svg";
import {
  CardItemContent,
  CardItems,
  QuickActionCard,
  QuickActionCards,
  StyledFeatureList,
} from "./style";

const FeatureList = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 248, 251)" }}>
      <StyledFeatureList>
        <Typography variant="h2" className="feature-heading">
          Experience your product as you create it.
        </Typography>
        <Typography variant="body1" className="feature-desc">
          Bold keeps your team’s work on-brand, on message, and on time.
          Innovative features make creating and sharing your work feel
          effortless.
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6.7} sm={6}>
            <CardItems>
              <CardItemContent>
                <Typography variant="h4" className="first-feature">
                  Mobile shopping for all
                </Typography>
                <Typography component="p">
                  Easily integrate with all your favorite tools.
                  <br />
                  APIs including automatic integrations.
                  <br />
                  <br />
                  Share content and learn.
                  <br />
                  Trustworthy and fun.
                </Typography>
              </CardItemContent>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240px"
                image={FeatureImage1}
                className="feature-img"
              />
            </CardItems>
          </Grid>

          <Grid item xs={12} md={5.2} sm={6}>
            <CardItems>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240px"
                image={FeatureImage2}
                className="feature-two-img"
              />
              <CardItemContent>
                <Typography variant="h4" className="first-feature">
                  Effortless integration.
                </Typography>
                <Typography component="p">
                  Easily integrate with all your favorite tools through and APIs
                  including automatic integrations.
                </Typography>
              </CardItemContent>
            </CardItems>
          </Grid>
          <QuickActionCards item xs={12} md={12} gap={5}>
            <QuickActionCard>
              <img src={QuickActionIcon} loading="lazy" />
              <Typography component={"p"}>
                Speed up your work and reduce repetitive tasks.
              </Typography>
              <Typography variant="h6">Quick Actions</Typography>
            </QuickActionCard>
            <QuickActionCard>
              <img src={EasyShop} loading="lazy" />
              <Typography variant="h6">Easy shop</Typography>
              <Typography component={"p"}>
                Speed up your work and reduce repetitive tasks.
              </Typography>
            </QuickActionCard>
            <QuickActionCard>
              <img src={SafeSecure} loading="lazy" />
              <Typography variant="h6">Safe and Secure</Typography>

              <Typography component={"p"}>
                Speed up your work and reduce repetitive tasks.
              </Typography>
            </QuickActionCard>
          </QuickActionCards>
        </Grid>
      </StyledFeatureList>
    </div>
  );
};

export default FeatureList;
