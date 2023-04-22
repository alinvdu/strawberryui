import React from "react";

export const AcceptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" viewBox="0 0 24 22">
        <g filter="url(#a)">
            <path stroke="#FB305A" stroke-width="2" d="M5 10.5 9.667 16 19 5" />
        </g>
        <defs>
            <filter id="a" width="23.525" height="21.193" x=".237" y=".353" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.984314 0 0 0 0 0.188235 0 0 0 0 0.352941 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_113_10" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_113_10" result="shape" />
            </filter>
        </defs>
    </svg>

);
