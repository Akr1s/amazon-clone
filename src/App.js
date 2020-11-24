import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import { auth } from "./database";
import { useData } from "./contexts/StateProvider";
import { ACTIONS } from "./contexts/reducer";
import Payment from "./pages/Payment/Payment";
import PaymentSuccesful from "./pages/PaymentSuccesful/PaymentSuccesful";

function App() {
  const [{}, dispatch] = useData();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: ACTIONS.SET_USER, user: authUser });
      } else {
        dispatch({ type: ACTIONS.SET_USER, user: null });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/payment_succesful">
            <Header />
            <PaymentSuccesful />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
