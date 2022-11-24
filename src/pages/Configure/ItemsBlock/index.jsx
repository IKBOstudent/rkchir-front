import React from "react";

import "./items.scss";

import ItemCard from "./ItemCard";

import intel_i5 from "@assets/intel_i5.png";
import intel_i7 from "@assets/intel_i7.png";
import intel_i9 from "@assets/intel_i9.png";
import { FilterContext, SortContext } from "..";

const products = [
    [
        {
            name: "CPU",
            items: [
                { name: "Intel Core i5-11600K", price: 299, imgUrl: intel_i5, views: 6 },
                { name: "Intel Core i5-12600K", price: 379, imgUrl: intel_i5, views: 12 },
                { name: "Intel Core i7-11700K", price: 479, imgUrl: intel_i7, views: 3 },
                { name: "Intel Core i7-12700K", price: 499, imgUrl: intel_i7, views: 15 },
                { name: "Intel Core i9-11900K", price: 599, imgUrl: intel_i9, views: 7 },
                { name: "Intel Core i9-12900K", price: 629, imgUrl: intel_i9, views: 10 },
            ],
        },
    ],
    [{ name: "Monitor", items: [{ name: "ASUS 4K Display 144Hz", price: 749 }] }],
    [{ name: "Glass Print", items: [{ name: "Neon", price: 149 }] }],
    [{ name: "OS", items: [{ name: "Windows 10 Home", price: 199 }] }],
];

function filterArray(array, a, b = Infinity) {
    let copyArray = [];
    for (let i of array) {
        if (a <= i.price && i.price <= b) {
            copyArray.push(i);
        }
    }

    return copyArray;
}

const ItemsBlock = ({ currentCategory, currentOption }) => {
    const { filter } = React.useContext(FilterContext);
    const { sort } = React.useContext(SortContext);

    let currentItems = products[currentCategory][currentOption].items;
    currentItems = filterHandle(currentItems);
    currentItems = sortHandle(currentItems);

    function filterHandle(arr) {
        console.log("filter");
        if (filter.type === 0) {
            const from = filter.values[0];
            const to = filter.values[1];

            arr = filterArray(products[currentCategory][currentOption].items, from, to);
        }
        return arr;
    }

    function sortHandle(arr) {
        console.log("sort");
        if (sort.name === "price") {
            arr.sort((a, b) => (a.price - b.price) * (sort.asc ? 1 : -1));
        } else if (sort.name === "popular") {
            arr.sort((a, b) => (a.views - b.views) * (sort.asc ? 1 : -1));
        }
        return arr;
    }

    return (
        <div className="items-container">
            <div className="items-grid">
                {currentItems.map((elem, id) => (
                    <ItemCard key={id} content={elem} />
                ))}
            </div>
        </div>
    );
};

export default ItemsBlock;
