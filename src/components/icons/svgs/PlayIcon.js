import React from 'react';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24" style={{
    marginLeft: '4px'
  }}>
    <g filter="url(#a)">
      <path fill="#FB325C" d="M16 12 5 6v11.5L16 12Z"/>
    </g>
    <defs>
      <filter id="a" width="23" height="23.5" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="1"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.208955 0 0 0 1 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_89_13"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_89_13" result="shape"/>
      </filter>
    </defs>
  </svg>
)

export default PlayIcon;
