import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Home from "Pages/Home";
import Settings from "Pages/Settings";

import { theme } from "Constants";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
