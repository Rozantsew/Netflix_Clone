import React from "react";
import "./App.css";
import { GlobalStyles } from "./assets/styles/GlobalStyle";
import Theme from "./assets/styles/Theme";
import RowContainer from "./Components/rowContainer/RowContainer";
import Nav from "./Components/nav/Nav";
import Banner from "./Components/banner/Banner";

function App() {
  return (
    <div className="App">
      <Theme>
        <GlobalStyles />
        <Nav />
        <Banner></Banner>
        <RowContainer />
      </Theme>
    </div>
  );
}

export default App;
