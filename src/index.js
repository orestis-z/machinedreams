import React from "react";
import ReactDOM from "react-dom";
// import Mint from "./Mint";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
// import Lucid from "./Lucid"
// import Binary from "./Binary"
import Terms from "./Terms"
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-7EX3NNPV7Y', {gtagOptions: {debug_mode: process.env.NODE_ENV == 'development'}});
ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search});


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
        <Routes>
        {/* <Route path="/mint-bmd" element={
            <Mint
                title="Binary Machine Dreams"
                tokenConfig={`${process.env.PUBLIC_URL}/config/config-bmd.${process.env.NODE_ENV}.json`}
                abi={`${process.env.PUBLIC_URL}/config/abi-bmd.${process.env.NODE_ENV}.json`}
                />}
            />
            <Route path="/mint-fmd" element={
                <Mint
                title="Fluid Machine Dreams"
                tokenConfig={`${process.env.PUBLIC_URL}/config/config-fmd.${process.env.NODE_ENV}.json`}
                abi={`${process.env.PUBLIC_URL}/config/abi-fmd.${process.env.NODE_ENV}.json`}
                />}
            /> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        {/* <Route path="/binary" element={<Binary />}></Route>
        <Route path="/lucid" element={<Lucid />}></Route> */}
        </Routes>
      <Footer/>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Mint, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
