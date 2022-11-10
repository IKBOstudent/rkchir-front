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

// origin pc, pc-builds, box.co.uk

const App = () => {
    React.useEffect(() => {
        const script = document.createElement("script");
        // script.defer = true;
        script.src = "./script.js";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/configure" element={<Configure />} />
            <Route path="/calculator-bottleneck" element={<CalculatorBottleneck />} />
            <Route path="/calculator-psu" element={<CalculatorPSU />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    );
};

export default App;
