import React from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/global.scss";

import Home from "@pages/Home";
import Cart from "@pages/Cart";
import Catalog from "@pages/Catalog";
import Configure from "@pages/Configure";
import CalculatorBottleneck from "@pages/Calculators/Bottleneck";
import CalculatorPSU from "@pages/Calculators/PSU";
import SignUp from "@pages/SignUp";
import ErrorPage from "@pages/ErrorPage";
import ItemPage from "@pages/ItemPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/configure" element={<Configure />} />
            <Route path="/calculator-bottleneck" element={<CalculatorBottleneck />} />
            <Route path="/calculator-psu" element={<CalculatorPSU />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;
