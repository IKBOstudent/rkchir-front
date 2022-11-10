import React from 'react';

import './navigation.scss';

const Navigation = ({ categories, selectedCategory, setCategory }) => {
    return (
        <ol className="configure-nav-list">
            {categories.map((item, id) => (
                <li
                    key={id}
                    className={selectedCategory === item ? 'current' : ''}
                    onClick={() => setCategory(item)}>
                    <div>
                        <sup>0{id + 1}</sup>
                        <strong>{item}</strong>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Navigation;
