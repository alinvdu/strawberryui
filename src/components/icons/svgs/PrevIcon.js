import React from 'react';

const PrevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" fill="none" viewBox="0 0 27 26">
        <g filter="url(#a)">
            <path fill="#FB325C" d="M10 12.74 21 7v11l-11-5.26Z" />
        </g>
        <g filter="url(#b)">
            <path fill="#FB325C" d="M7 7h2v12H7z" />
        </g>
        <defs>
            <filter id="a" width="23" height="23" x="4" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_93_3" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_93_3" result="shape" />
            </filter>
            <filter id="b" width="16" height="26" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_93_3" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_93_3" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_93_3" result="shape" />
            </filter>
        </defs>
    </svg>

)

export default PrevIcon;
