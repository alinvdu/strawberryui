import React from "react";
import styled, { css } from "styled-components";

export const VARIANTS = {
    RED: "red",
    BLUE: "blue"
};

const Button = ({ icon, children, variant = VARIANTS.RED, ...rest }) => {
    return (
        <StyledButton {...rest}>
            <BackgroundElementBorder />
            <BackgroundElement />
            {variant === VARIANTS.RED ? <CircleElement /> : <CircleElementBlue />}
            {variant === VARIANTS.RED ?
                <InnerElement>
                    {icon}
                </InnerElement> :
                <InnerElementBlue>
                    {icon}
                </InnerElementBlue>
            }
        </StyledButton>
    );
};

const StyledButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 56px;
    height: 56px;
    border: none;
    overflow: hidden;
`;

const BackgroundElement = styled.div`
    position: absolute;
    top: 1;
    left: 1;
    width: 53px;
    height: 53px;
    border-radius: 53px;
    box-sizing: border-box;
    background: linear-gradient(180deg, #06151C 0%, #08121A 100%);
    margin: 1px;
`;

const BackgroundElementBorder = styled.div`
    position: absolute;
    top: 0px; bottom: 0px;
    left: 0px; right: 0px;
    border-radius: 56px;
    background: linear-gradient(180deg, #424145 0%, rgba(0, 0, 0, 0) 72%);
`;

const commonCircleElements = css`
    position: absolute;
    top: 4px;
    left: 4px;
    width: 48px;
    height: 48px;
    border-radius: 46px;
    box-sizing: border-box;
`

const CircleElement = styled.div`
    ${commonCircleElements}
    border: 3px solid #FB305A;
    filter: drop-shadow(0px 0px 2px #FF4977);
`;

const CircleElementBlue = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    width: 48px;
    height: 48px;
    border-radius: 46px;
    box-sizing: border-box;
    background: conic-gradient(from 180deg at 50% 50%, #173B4B 0deg, #155683 47.94deg, #6A2830 90.36deg, #2F689F 142.76deg, #15D0F5 211.68deg, #1D3646 310.97deg, #13303D 358.44deg, #163B4A 360deg);
    box-shadow: 0px 0px 2px 0px rgba(38, 209, 220, 0.51);
`;

const commonInnerElements = css`
    position: absolute;
    top: 6px;
    left: 6px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerElement = styled.div`
    ${commonInnerElements}
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
    box-shadow: inset 0px 0px 5px #FC325D;
`;

const InnerElementBlue = styled.div`
    ${commonInnerElements}
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
`

export const Rectangle = styled.div`
    width: 11px;
    height: 11px;

    background: #FB325C;
    box-shadow: 0px 0px 4px 1px #FF0538;

`

export default Button;
