import React from 'react';

const SvgPlayButton = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" fill="none" viewBox="0 0 64 65">
        <g filter="url(#a)">
            <circle cx="32" cy="29" r="27.5" fill="url(#b)" stroke="url(#c)"/>
            <g filter="url(#d)">
            <circle cx="32" cy="29" r="23" fill="url(#e)"/>
            </g>
            <g filter="url(#f)">
            <circle cx="32" cy="29" r="23" stroke="#FB305A" stroke-width="2" shape-rendering="crispEdges"/>
            </g>
            <g filter="url(#g)">
            <path fill="#FB325C" d="m38 30-11-6v11.5L38 30Z"/>
            </g>
        </g>
        <defs>
            <filter id="a" width="64" height="64" x="0" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_89_8"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_89_8" result="shape"/>
            </filter>
            <filter id="d" width="46" height="46" x="9" y="6" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="3.5"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0.988235 0 0 0 0 0.196078 0 0 0 0 0.364706 0 0 0 1 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_89_8"/>
            </filter>
            <filter id="f" width="58" height="58" x="3" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix values="0 0 0 0 0.843137 0 0 0 0 0.247059 0 0 0 0 0.396078 0 0 0 1 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_89_8"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_89_8" result="shape"/>
            </filter>
            <filter id="g" width="23" height="23.5" x="22" y="18" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="1"/>
            <feGaussianBlur stdDeviation="3"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_89_8"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_89_8" result="shape"/>
            </filter>
            <linearGradient id="b" x1="32" x2="32" y1="1" y2="57" gradientUnits="userSpaceOnUse">
            <stop stop-color="#06151C"/>
            <stop offset="1" stop-color="#08121A"/>
            </linearGradient>
            <linearGradient id="c" x1="32" x2="32" y1="1" y2="57" gradientUnits="userSpaceOnUse">
            <stop stop-color="#424145"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="e" x1="17" x2="48" y1="11" y2="46.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#151A24"/>
            <stop offset="1" stop-color="#0C151D"/>
            </linearGradient>
        </defs>
    </svg>
);

export default SvgPlayButton;
