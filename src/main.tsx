import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import themeConfig from "./@core/configs/themeConfig";
import './index.css'

const coreThemeConfig = themeConfig;

const theme = createTheme(coreThemeConfig);


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
