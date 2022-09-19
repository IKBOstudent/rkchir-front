import { Routes, Route } from "react-router-dom";

import "@styles/global.scss";

import Home from "@pages/Home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default App;
