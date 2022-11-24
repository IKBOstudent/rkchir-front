import React from "react";
import { FilterContext } from "../..";

const ArrowIcon = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2.2">
            <path d="M18 9L12 15L6 9" />
        </svg>
    );
};

const Filter = ({ category, type, items }) => {
    const [openFilter, setOpenFilter] = React.useState(false);

    const { filter, setFilter } = React.useContext(FilterContext);

    function handleChangeForm(event, par) {
        const label = event.target.labels[0].textContent;
        if (par === 0) {
            const val = event.target.value;
            // console.log(val);
            const prevArr = [...filter.values];
            if (label === "From") {
                prevArr[0] = Number(val || 0);

                setFilter(prev => ({ ...prev, type: 0, values: prevArr }));
            } else {
                if (prevArr.length > 1) {
                    val ? (prevArr[1] = Number(val)) : prevArr.pop();
                } else {
                    val && prevArr.push(Number(val));
                }
                setFilter(prev => ({ ...prev, type: 0, values: prevArr }));
            }
        } else if (par === 1) {
            console.log(event.target.checked);
        }
    }

    return (
        <li>
            <div className="filters-list__button" onClick={() => setOpenFilter(prev => !prev)}>
                <h3>{category}</h3>
                <ArrowIcon />
            </div>

            {openFilter ? (
                <div className="filters-list__dropdown">
                    {type === 0 ? (
                        <form onChange={event => handleChangeForm(event, 0)}>
                            {items.map((el, id) => (
                                <div key={id}>
                                    <label htmlFor={"filter" + el}>{el}</label>
                                    <input type="number" id={"filter" + el} />
                                </div>
                            ))}
                        </form>
                    ) : (
                        <form onChange={event => handleChangeForm(event, 1)}>
                            {items.map((el, id) => (
                                <div key={id}>
                                    <input type="checkbox" name="filter" id={"filter" + el} />
                                    <label htmlFor={"filter" + el}>{el}</label>
                                </div>
                            ))}
                        </form>
                    )}
                </div>
            ) : (
                <></>
            )}
        </li>
    );
};

export default Filter;
