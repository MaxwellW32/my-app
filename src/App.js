import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

import { Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useReducer } from "react";

//possible actions
const actions = {
  BUYINGREDIENTS: "buy-ingredients",
};

const reducer = (state, action) => {
  if (action.type === actions.BUYINGREDIENTS)
    return { money: state.money - 10 };
  return state;
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const test = () => {
    dispatch({ type: actions.BUYINGREDIENTS });
  };

  return (
    <>
      <div id="topCont">
        <Header></Header>
        <Nav></Nav>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
