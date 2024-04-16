import { Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartPage from "./components/pages/CartPage/CartPage";
import HomePage from "./components/pages/HomePage/HomePage";
import "./index.css";
import { ReactFragment } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useDispatch, useSelector } from "react-redux";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWx1a2FjaCIsImEiOiJ3US1JLXJnIn0.xrpBHCwvzsX76YlO-08kjg";

//import  from './components/Card'

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login);
  return (
    //<Router>
    <div className="">
      <div className="">
        <Outlet></Outlet>
      </div>

      {/*<Footer />*/}
    </div>
    //</Router>
  );
}

export default App;
