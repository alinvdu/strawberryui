import React from 'react';

const NextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
        <g filter="url(#c)">
            <path fill="#FB325C" d="M17 13 6 7v11.5L17 13Z" />
        </g>
        <g filter="url(#d)">
            <path fill="#FB325C" d="M17 7h2v12h-2z" />
        </g>
        <defs>
            <filter id="c" width="23" height="23.5" x="0" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_93_2" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_93_2" result="shape" />
            </filter>
            <filter id="d" width="16" height="26" x="10" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_93_2" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_93_2" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_93_2" result="shape" />
            </filter>
        </defs>
    </svg>
)

export default NextIcon;
