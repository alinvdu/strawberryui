import React from 'react';
import styled from 'styled-components';

const StyledArrowLeft = styled.span`
    margin-right: 3px;
`;

const StyledArrowRight = styled.span`
    margin-left: 2px;
`;

const ArrowRight = () => (
    <StyledArrowRight>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none" viewBox="0 0 10 14">
            <path fill="#fff" d="M.496 13.944v-2.232L7.504 7.08v-.096L.496 2.352V.12l9.048 6.048v1.728L.496 13.944Z" />
        </svg>
    </StyledArrowRight>
);

const ArrowLeft = () => (
    <StyledArrowLeft>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none" viewBox="0 0 10 14">
            <path fill="#fff" d="M9.904 13.944.856 7.896V6.168L9.904.12v2.232L2.896 6.984v.096l7.008 4.632v2.232Z" />
        </svg>
    </StyledArrowLeft>
);

const ArrowRightFat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" fill="none" viewBox="0 0 13 21">
        <path fill="#fff" fill-opacity=".65" d="M.136 20.008v-4.256l8.48-5.312v-.128L.136 5V.744l12.352 8v3.264l-12.352 8Z"/>
    </svg>

);

const ArrowLeftFat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" fill="none" viewBox="0 0 14 21">
        <path fill="#fff" fill-opacity=".65" d="m13.064 20.008-12.352-8V8.744l12.352-8V5l-8.48 5.312v.128l8.48 5.312v4.256Z"/>
    </svg>
);

export { ArrowRight, ArrowLeft, ArrowRightFat, ArrowLeftFat };
