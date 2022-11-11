import React from 'react';

import './navigation.scss';

const Navigation = ({ categories, selectedCategory, setCategory }) => {
    console.log(categories);
    return (
        <ol className="configure-nav-list">
            {categories.map((item, id) => (
                <li
                    key={id}
                    className={id === selectedCategory ? 'current' : ''}
                    onClick={() => setCategory(id)}>
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
