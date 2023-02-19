import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="topCont">
        <Header></Header>
        <Nav></Nav>
      </div>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
