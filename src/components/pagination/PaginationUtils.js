import React from 'react';

const GreenDecorationLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="34" fill="none" viewBox="0 0 23 34">
        <path fill="url(#paga)" stroke="#344938" stroke-width=".2" d="M.1 7.1c5.81.015 10.004 1.352 12.708 3.34 2.718 1.998 3.934 4.654 3.78 7.304C16.28 23.026 10.51 28.366.1 28.4v-2.8c7.354-.033 11.354-3.654 11.488-7.339.068-1.849-.844-3.69-2.765-5.064C6.919 11.835 4.025 10.93.1 10.915V7.1Z" />
        <path fill="url(#pagb)" stroke="#4F8B6A" stroke-width=".2" d="M.1.103c8.055.265 13.81 2.474 17.483 5.63 3.688 3.167 5.284 7.292 5.005 11.385C22.03 25.282 14 33.361.1 33.4v-4.8c10.463-.034 16.123-5.412 16.312-10.847.096-2.723-1.188-5.44-3.907-7.474C9.804 8.26 5.69 6.916.1 6.9V.103Z" />
        <defs>
            <linearGradient id="paga" x1="8" x2="8" y1="6" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15280C" />
                <stop offset=".494" stop-color="#293516" />
                <stop offset="1" stop-color="#162910" />
            </linearGradient>
            <linearGradient id="pagb" x1="11.359" x2="11.359" y1="0" y2="33.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1F523A" />
                <stop offset=".494" stop-color="#358759" />
                <stop offset="1" stop-color="#103B25" />
            </linearGradient>
        </defs>
    </svg>
);

const GreenDecorationRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="34" fill="none" viewBox="0 0 23 34">
        <path fill="url(#vaga)" stroke="#344938" stroke-width=".2" d="M22.62 7.525c-5.81.015-10.004 1.351-12.709 3.34-2.718 1.997-3.934 4.654-3.78 7.304C6.44 23.45 12.21 28.79 22.62 28.824v-2.8c-7.355-.032-11.355-3.654-11.489-7.338-.067-1.85.844-3.69 2.766-5.065 1.903-1.362 4.798-2.266 8.723-2.282V7.525Z" />
        <path fill="url(#vagb)" stroke="#4F8B6A" stroke-width=".2" d="M22.62.528C14.564.793 8.81 3 5.136 6.157 1.448 9.324-.148 13.45.13 17.543c.557 8.164 8.587 16.243 22.489 16.281v-4.8C12.156 28.99 6.496 23.612 6.307 18.178c-.095-2.724 1.188-5.441 3.907-7.474 2.701-2.02 6.817-3.364 12.406-3.38V.529Z" />
        <defs>
            <linearGradient id="vaga" x1="14.72" x2="14.72" y1="6.424" y2="30.424" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15280C" />
                <stop offset=".494" stop-color="#293516" />
                <stop offset="1" stop-color="#162910" />
            </linearGradient>
            <linearGradient id="vagb" x1="11.36" x2="11.36" y1=".424" y2="33.924" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1F523A" />
                <stop offset=".494" stop-color="#358759" />
                <stop offset="1" stop-color="#103B25" />
            </linearGradient>
        </defs>
    </svg>
);

export { GreenDecorationLeft, GreenDecorationRight, };
