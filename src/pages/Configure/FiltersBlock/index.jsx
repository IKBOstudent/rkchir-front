import React from "react";

import "./filtersblock.scss";

const ArrowIcon = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2.2">
            <path d="M18 9L12 15L6 9" />
        </svg>
    );
};

function onMoveSlider(event) {
    console.log(event);
    const slider = document.getElementById("slider");
    console.dir(slider);
    // console.log(event.offsetX);
    // const max_pos = slider.parentElement.clientWidth;
    // const new_pos = max_pos < event.offsetX ? max_pos : event.offsetX;
    // console.log(new_pos);
    // slider.style.left = new_pos + "px";
}

function stopSliding() {
    console.log("removed listener from mousemove");
    document.removeEventListener("mousemove", onMoveSlider);
    console.log("removed listener from mouseup");
    document.removeEventListener("mouseup", stopSliding);
}

function handleTapSlider(event) {
    event.preventDefault();

    console.log("added listener on mousemove");
    document.addEventListener("mousemove", onMoveSlider);
    console.log("added listener on mouseup");
    document.addEventListener("mouseup", stopSliding);
}

const FiltersBlock = () => {
    const filters = {
        Price: ["$100", "$200"],
        Brand: ["AMD", "Intel"],
        Model: [
            "AMD Ryzen 3",
            "AMD Ryzen 5",
            "AMD Ryzen 7",
            "AMD Ryzen 9",
            "Intel Core i3",
            "Intel Core i5",
            "Intel Core i7",
            "Intel Core i9",
        ],
    };

    function handleClick(event) {
        const filters = document.querySelectorAll(".filters-list__item");
        // for (let f of filters) {
        //     if (f !== event.target) {
        //     }
        // }
    }

    return (
        <div className="filters-container">
            <ul className="filters-list">
                {Object.keys(filters).map((category, id) => (
                    <li key={id} className="filters-list__item" onClick={handleClick}>
                        <h3>{category}</h3>
                        <ArrowIcon />
                    </li>
                ))}
                <li className="filters-slider">
                    Range slider
                    <div>
                        <span id="slider" style={{ left: 0 }} onMouseDown={handleTapSlider}></span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FiltersBlock;
