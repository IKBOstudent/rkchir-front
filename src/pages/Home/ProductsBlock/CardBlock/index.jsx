import React from 'react';
import { Link } from 'react-router-dom';

import './card-block.scss';

const CardBlock = () => {
    return (
        <div className="products-card-box card">
            <Link to="/">
                <h3>Title</h3>
                <span>
                    An <i>item</i> from list
                </span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolores!</p>
            </Link>
        </div>
    );
};

export default CardBlock;
