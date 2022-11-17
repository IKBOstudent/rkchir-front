import React from 'react';

import './configure.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Navigation from './Navigation';
import MenuBlock from './MenuBlock';
import ItemsBlock from './ItemsBlock';
import FiltersBlock from './FiltersBlock';

const options = [
    {
        name: 'System',
        items: [
            'CPU',
            'Video Card',
            'Motherboard',
            'CPU Cooling',
            'RAM',
            'Storage',
            'Power Supply',
            'Case',
        ],
    },
    { name: 'Peripherals', items: ['Monitor', 'Keyboard', 'Mouse'] },
    { name: 'Customization', items: ['Glass Print', 'RGB'] },
    { name: 'Other', items: ['OS', 'Office', 'Antivirus'] },
];

const Configure = () => {
    const [category, setCategory] = React.useState(0);
    const [option, setOption] = React.useState(0);

    console.log(options[category].name, options[category].items[option]);

    return (
        <>
            <Header />
            <main>
                <div className="configure-container">
                    <nav className="configure-nav">
                        <Navigation
                            categories={options.map((item) => item.name)}
                            selectedCategory={category}
                            setCategory={(id) => {
                                setCategory(id);
                                setOption(0);
                            }}
                        />
                    </nav>
                    <section className="configure-menu">
                        <MenuBlock
                            options={options[category].items}
                            selectedOption={option}
                            setOption={(id) => setOption(id)}
                        />
                    </section>
                    <article className="configure-content">
                        <section className="configure-content-filters">
                            <FiltersBlock />
                        </section>
                        <section className="configure-content-items">
                            <ItemsBlock currentCategory={category} currentOption={option} />
                        </section>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Configure;
