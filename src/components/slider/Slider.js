import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import circleSmall from './circle-small.png';
import circleWhite from './circle-white.png';
import strawberry from './strawberry.png';

const SliderWrapper = styled.div`
    position: relative;
    width: 66px;
    height: 195px;
    padding: 1px;
    box-sizing: border-box;
    display: flex;
`;

const SliderBorder = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(92.47deg, rgba(14, 57, 67, 0.99) 1.87%, rgba(24, 105, 150, 0.99) 97.76%)` : `linear-gradient(92.47deg, rgba(132, 164, 190, 0.99) 1.87%, rgba(168, 194, 208, 0.99) 97.76%);`};
    border-radius: 25px;
`;

const SliderBg = styled.div`
    padding-top: 23px;
    flex: 1;
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(91.65deg, #112436 1.2%, #1A4162 98.42%)` : `linear-gradient(91.65deg, #88ADCF 1.2%, #CDEDFF 98.42%);`};
`;

const SliderContainer = styled.div`
  position: relative;
  width: 26px;
  flex: 1;
  border-radius: 15px;
`;

const SliderButton = styled.div`
  position: absolute;
  bottom: ${props => props.position}px;
  left: 50%;
  transform: translateX(-50%);
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-image: ${({ theme }) => theme === 'dark' ? `url('${circleSmall}')` : `url('${circleWhite}')`};
  background-color: none;
  background-size: contain;
  border: none;
  box-shadow: -5px -1px 11px rgba(0, 0, 0, 0.56);
  cursor: grab;
`;

const Strawberry = styled.div`
    position: relative;
    width: 26px;
    height: 26px;
    margin-top: -5px;
    background-image: url('${strawberry}');
    background-size: contain;
    background-repeat: no-repeat;
`;

const CenterLine = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #AA586D 10.58%, rgba(164, 92, 111, 0.626866) 71.35%, rgba(154, 100, 114, 0) 94.79%);
`;

const RightLine = styled.div`
    position: absolute;
    right: 0;
    width: 2px;
    background-color: ${({ theme }) => theme === 'dark' ? `rgba(36, 73, 104, 1)` : `rgba(132, 168, 200, 0.7)`};
    height: 100%;
`;

const LeftLine = styled.div`
    position: absolute;
    left: 0;
    width: 2px;
    background-color: ${({ theme }) => theme === 'dark' ? `rgba(30, 60, 89, 1)` : `rgba(132, 168, 200, 1)`};
    height: 100%;
`;

const Slider = ({ theme = 'dark' }) => {
    const [position, setPosition] = useState(85);

    const handleMouseDown = e => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = e => {
        const { top, bottom } = sliderContainerRef.current.getBoundingClientRect();
        let position = bottom - e.clientY - 20;
        if (position < 0) position = 0;
        if (position > bottom - top - 28) position = bottom - top - 28;
        setPosition(position);
    };

    const handleMouseUp = e => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const sliderContainerRef = useRef(null);

    return (
        <SliderWrapper>
            <SliderBorder theme={theme} />
            <SliderBg theme={theme}>
                <SliderContainer ref={sliderContainerRef}>
                    <CenterLine theme={theme} />
                    <LeftLine theme={theme} />
                    <RightLine theme={theme} />
                    <SliderButton position={position} onMouseDown={handleMouseDown} />
                </SliderContainer>
                <Strawberry />
            </SliderBg>
        </SliderWrapper>
    );
};

export default Slider;
