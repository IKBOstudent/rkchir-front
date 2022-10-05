import React from 'react';

import './filters.scss';

const Filters = () => {
    return (
        <nav>
            <div className="filters-container">
                <ol className="filters-list">
                    <li>
                        Price:
                        <input type="range" min="0" max="11" defaultValue="7" step="1" />
                    </li>
                    <li>
                        <input type="radio" id="chioce1" name="contact" value="email" />
                        <label forHTML="choice1">Intel</label>

                        <input type="radio" id="choice2" name="contact" value="phone" />
                        <label forHTML="choice2">AMD</label>
                    </li>
                    <li>c</li>
                </ol>
            </div>
        </nav>
    );
};

export default Filters;
