import React from "react";
import { Typography, Link, IconButton, List, ListItem } from "@mui/material";
import logo from "../../assets/images/604b3661a1a5614a691a9615_Bold.svg";
import {
  FacebookOutlined,
  ArrowOutward,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import {
  FooterBrandContent,
  FooterColumn,
  FooterContent,
  FooterCredits,
  FooterMain,
} from "./style";

interface SocialMediaLink {
  icon: JSX.Element;
  href: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  { icon: <Instagram />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <LinkedIn />, href: "#" },
  { icon: <FacebookOutlined />, href: "#" },
];

const SocialIcon: React.FC<SocialMediaLink> = ({ icon, href }) => (
  <IconButton component={Link} href={href} color="inherit" sx={{ p: 0.5 }}>
    {icon}
  </IconButton>
);

const Footer: React.FC = () => {
  return (
    <FooterMain>
      <FooterContent>
        <FooterColumn item xs={12} md={6}>
          <Typography variant="body1">Follow us</Typography>
          {socialMediaLinks.map(({ icon, href }) => (
            <SocialIcon key={href} icon={icon} href={href} />
          ))}
        </FooterColumn>
        <FooterCredits>
          <Typography variant="body2">
            Made by{"  "}
            <Typography component="b">
              Azwedo <ArrowOutward />
            </Typography>
            &{"  "}
            <Typography component="b">
              Wedoflow <ArrowOutward />{" "}
            </Typography>
          </Typography>
          <Typography variant="body2">Powered by</Typography>
          <Typography component="b">
            Webflow <ArrowOutward />
          </Typography>
        </FooterCredits>
      </FooterContent>
      <FooterBrandContent>
        <img src={logo} alt="Logo" />
        <List className="list-text">
          {[
            "Change Log",
            "Style",
            "Licensing",
            "Privacy",
            "info@website.com",
          ].map((text) => (
            <ListItem key={text}>
              <span className="list-text-border">{text}</span>
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" className="copyright">
          Copyright &copy;{" "}
          <Typography component="span" fontWeight="bold" className="copyright">
            Bold
          </Typography>{" "}
        </Typography>
      </FooterBrandContent>
    </FooterMain>
  );
};

export default Footer;
