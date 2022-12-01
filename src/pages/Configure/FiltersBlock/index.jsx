import React from "react";
import Filter from "./Filter";

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
        Price: { type: 0, items: ["From", "To"] },
        Brand: { type: 1, items: ["AMD", "Intel"] },
        Model: {
            type: 1,
            items: ["Intel Core i5", "Intel Core i7", "Intel Core i9"],
        },
    };

    return (
        <div className="filters-container">
            <ul className="filters-list">
                {Object.keys(filters).map((category, id) => (
                    <Filter
                        key={id}
                        category={category}
                        type={filters[category].type}
                        items={filters[category].items}
                    />
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
