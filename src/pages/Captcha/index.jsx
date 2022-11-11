import React from 'react';

import './captcha.scss';

const Captcha = ({ setCaptchaPassed }) => {
    function setText() {
        let alpha = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];
        var i;
        for (i = 0; i < 6; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
            var f = alpha[Math.floor(Math.random() * alpha.length)];
            var g = alpha[Math.floor(Math.random() * alpha.length)];
        }
        document.getElementById('captcha-str').textContent = `${a}${b}${c}${d}${e}${f}${g}`;
    }

    React.useEffect(() => {
        setText();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const captchaInput = document.getElementById('captcha-input');
        const submitBtn = document.getElementById('captcha-button');

        captchaInput.classList.remove('animated', 'shake');

        const input = captchaInput.value;

        if (document.getElementById('captcha-str').textContent === input) {
            console.log('good');
            setCaptchaPassed(true);
            submitBtn.style.backgroundColor = '#c4c4c4';
            submitBtn.style.pointerEvents = 'none';
        } else {
            captchaInput.classList.add('animated', 'shake');
            setTimeout(() => {
                captchaInput.classList.remove('animated', 'shake');
                captchaInput.value = '';
                setText();
            }, 500);
        }
    }

    return (
        <div className="captcha-container">
            <div id="captcha">
                <form id="captcha-form" onSubmit={handleSubmit}>
                    <span id="captcha-str"></span>
                    <input id="captcha-input" type="text" placeholder="Enter captcha text" />
                    <button
                        type="submit"
                        className="button-animated disabled-captcha"
                        id="captcha-button">
                        <span>Submit</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Captcha;
