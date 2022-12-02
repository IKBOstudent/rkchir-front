import React from 'react';

import './home.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import BuildsBlock from './BuildsBlock';
import CategoriesBlock from './CategoriesBlock';

import poster1 from '@assets/poster1.png';
import poster2 from '@assets/poster2.jpg';

export function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

const Home = () => {
    function animateText(textArea) {
        let text = textArea.innerText;
        let to = text.length;
        let from = 0;

        function linear(timeFraction) {
            return timeFraction;
        }

        animate({
            duration: 5000,
            timing: linear,
            draw: function (progress) {
                let result = (to - from) * progress + from;
                textArea.innerText = text.slice(0, Math.ceil(result));
            },
        });
    }

    function animatePoster(element) {
        function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            };
        }

        function bounce(timeFraction) {
            for (let a = 0, b = 1; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
                }
            }
        }

        animate({
            duration: 2000,
            timing: makeEaseOut(bounce),
            draw: function (progress) {
                // console.log(progress);
                element.style.transform =
                    'translateX(' + (progress - 1) * window.innerWidth * 1.2 + 'px)';
            },
        });
    }

    React.useEffect(() => {
        const posters = document.querySelector('.home-posters');

        const targetScroll = posters.offsetTop + posters.offsetHeight;

        function handleScroll(event) {
            const scroll = window.scrollY + window.innerHeight;

            if (scroll >= targetScroll) {
                console.log('yeah');

                animatePoster(posters.firstChild);
                setTimeout(() => {
                    animatePoster(posters.lastChild);
                    posters.classList.add('show');
                }, 200);

                document.removeEventListener('scroll', handleScroll);
            }
        }

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        animateText(document.getElementById('text-area'));
    }, []);

    return (
        <>
            <Header />
            <main>
                <article className="home-container">
                    <section className="home-greeting">
                        <div>
                            <h1>
                                GAMING
                                <br />
                                LIMITLESS
                                <br />
                                POSSIBILITIES
                            </h1>
                            <h1 id="text-area">
                                GAMING
                                <br />
                                LIMITLESS
                                <br />
                                POSSIBILITIES
                            </h1>
                        </div>

                        <h3>
                            System Discounts, Free Peripherals, and More for a Limited Time Only
                        </h3>
                        <button type="button" className="button-animated">
                            <span>LEARN MORE</span>
                        </button>
                    </section>
                    <section className="home-builds">
                        <BuildsBlock />
                    </section>

                    <section className="home-posters">
                        <a href="#">
                            <img src={poster1} />
                        </a>
                        <a href="#">
                            <img src={poster2} />
                        </a>
                    </section>

                    <section className="home-categories">
                        <CategoriesBlock />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Home;
