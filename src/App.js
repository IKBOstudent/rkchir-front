import React from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/global.scss";

import Home from "@pages/Home";
import Cart from "@pages/Cart";
import Catalog from "@pages/Catalog";
import Configure from "@pages/Configure";
import CalculatorBottleneck from "@pages/Calculators/Bottleneck";
import SignUp from "@pages/SignUp";
import LogIn from "@pages/LogIn";
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;
