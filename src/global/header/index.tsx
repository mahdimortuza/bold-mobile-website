import React, { useState, startTransition } from "react";
import { ReactNode } from "react";
import Logo from "/src/assets/images/604b3661a1a5614a691a9615_Bold.svg";
import MenuIcon from "/src/assets/images/604b35876a71cb400b768e66_menu-icon-white.svg";
import {
  StyledDesktopAppBar,
  StyledDesktopButton,
  StyledMobileAppBar,
  StyledMobileButton,
} from "./style";
import {
  Toolbar,
  IconButton,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    startTransition(() => {
      setIsMenuOpen(!isMenuOpen);
    });
  };

  return (
    <Box sx={{ boxShadow: "0 1px 0 0 #f1f1f1" }}>
      {isMobile ? (
        <StyledMobileAppBar position="static" elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between",  pr:"10px !important" }}>
            <img src={Logo} alt="Logo" className="mobile-logo" />
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              className="mobile-menu"
            >
              <img src={MenuIcon} alt="Menu" />
            </IconButton>
          </Toolbar>
          <Collapse in={isMenuOpen}>
            <List className="mobile-menu-list">
              <ListItem button onClick={toggleMenu}>
                <ListItemText primary="Feature List" />
              </ListItem>
              <ListItem button onClick={toggleMenu}>
                <ListItemText primary="About Bold" />
              </ListItem>
              <ListItem button onClick={toggleMenu}>
                <ListItemText primary="App Night Mode" />
              </ListItem>
              <StyledMobileButton variant="contained" color="secondary">
                <Typography component={"span"} className="mobile-btn-text">
                  BOLD
                </Typography>{" "}
                <span className="mobile-btn-text-2">for $24</span>
              </StyledMobileButton>
            </List>
          </Collapse>
        </StyledMobileAppBar>
      ) : (
        <StyledDesktopAppBar position="static" elevation={0} >
          <Toolbar>
            <Box className="desktop-list-container">
              <img src={Logo} alt="Logo" style={{ marginTop: 8 }} />
              <Box className="desktop-menu-list">
                <Typography>Feature List</Typography>
                <Typography> About Bold </Typography>
                <Typography>App Night Mode</Typography>
              </Box>{" "}
              <StyledDesktopButton variant="contained" color="secondary">
                <Typography component={"span"} className="desktop-btn-text">
                  BOLD
                </Typography>{" "}
                <Typography component={"span"} className="desktop-btn-text-2">
                  {" "}
                  for $24
                </Typography>{" "}
              </StyledDesktopButton>
            </Box>
          </Toolbar>
        </StyledDesktopAppBar>
      )}
    </Box>
  );
};

export default Header;
