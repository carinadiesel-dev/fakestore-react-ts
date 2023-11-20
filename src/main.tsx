import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
BrowserRouter;

const christmasTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#002d26",
    },
    secondary: {
      main: "#9191e9",
    },
    error: {
      main: "#a01a22",
    },
    info: {
      main: "#3e92cc",
    },
    success: {
      main: "#d1beb0",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={christmasTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
