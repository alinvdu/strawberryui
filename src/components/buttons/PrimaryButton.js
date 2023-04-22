import React from "react";
import styled, { css } from "styled-components";

export const VARIANTS = {
    RED: "red",
    BLUE: "blue"
};

export const SIZER_VARIANTS = {
    NORMAL: "normal",
    SMALL: "small"
};

const Button = ({ icon, children, variant = VARIANTS.RED, sizeVariant = SIZER_VARIANTS.NORMAL, ...rest }) => {
    if (sizeVariant === SIZER_VARIANTS.NORMAL) {
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
    }

    return (
        <StyledButtonSmall {...rest}>
            <BackgroundElementBorderSmall />
            <BackgroundElementSmall />
            {variant === VARIANTS.RED ? <CircleElementSmall /> : <CircleElementBlueSmall />}
            {variant === VARIANTS.RED ?
                <InnerElementSmall>
                    {icon}
                </InnerElementSmall> :
                <InnerElementBlueSmall>
                    {icon}
                </InnerElementBlueSmall>
            }
        </StyledButtonSmall>
    );
};

const CommonStyledButton = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: none;
    overflow: hidden;
    cursor: pointer;
`;

const StyledButton = styled.div`
    ${CommonStyledButton}
    width: 56px;
    height: 56px;
`;

const StyledButtonSmall = styled.div`
    ${CommonStyledButton}
    width: 32px;
    height: 32px;
`;

const CommonBackgroundElement = css`
    position: absolute;
    width: 53px;
    height: 53px;
    box-sizing: border-box;
    background: linear-gradient(180deg, #06151C 0%, #08121A 100%);
    margin: 1px;
`;

const BackgroundElement = styled.div`
    ${CommonBackgroundElement}
    width: 53px;
    height: 53px;
    border-radius: 53px;
`;

const BackgroundElementSmall = styled.div`
    ${CommonBackgroundElement}
    width: 30px;
    height: 30px;
    border-radius: 29px;
`;

const CommonBackgroundElementBorder = css`
    position: absolute;
    top: 0px; bottom: 0px;
    left: 0px; right: 0px;
    background: linear-gradient(180deg, #424145 0%, rgba(0, 0, 0, 0) 72%);
`;

const BackgroundElementBorder = styled.div`
    ${CommonBackgroundElementBorder}
    border-radius: 56px;
`;

const BackgroundElementBorderSmall = styled.div`
    ${CommonBackgroundElementBorder}
    border-radius: 32px;
`;

const commonCircleElements = css`
    position: absolute;
    box-sizing: border-box;
`

const CircleElement = styled.div`
    ${commonCircleElements}
    width: 48px;
    height: 48px;
    top: 4px;
    left: 4px;
    border-radius: 46px;
    border: 3px solid #FB305A;
    filter: drop-shadow(0px 0px 2px #FF4977);
`;

const CircleElementBlue = styled.div`
    ${commonCircleElements}
    width: 48px;
    height: 48px;
    top: 4px;
    left: 4px;
    border-radius: 46px;
    box-sizing: border-box;
    background: conic-gradient(from 180deg at 50% 50%, #173B4B 0deg, #155683 47.94deg, #6A2830 90.36deg, #2F689F 142.76deg, #15D0F5 211.68deg, #1D3646 310.97deg, #13303D 358.44deg, #163B4A 360deg);
    box-shadow: 0px 0px 2px 0px rgba(38, 209, 220, 0.51);
`;

const CircleElementSmall = styled.div`
    ${commonCircleElements}
    width: 26px;
    height: 26px;
    top: 3px;
    left: 3px;
    border-radius: 26px;
    border: 3px solid #FB305A;
    filter: drop-shadow(0px 0px 2px #FF4977);
`;

const CircleElementBlueSmall = styled.div`
    ${commonCircleElements}
    width: 26px;
    height: 26px;
    border-radius: 26px;
    top: 3px;
    left: 3px;
    box-sizing: border-box;
    background: conic-gradient(from 180deg at 50% 50%, #173B4B 0deg, #155683 47.94deg, #6A2830 90.36deg, #2F689F 142.76deg, #15D0F5 211.68deg, #1D3646 310.97deg, #13303D 358.44deg, #163B4A 360deg);
    box-shadow: 0px 0px 2px 0px rgba(38, 209, 220, 0.51);
`;

const commonInnerElements = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerElement = styled.div`
    ${commonInnerElements}
    width: 44px;
    height: 44px;
    top: 6px;
    left: 6px;
    border-radius: 44px;
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
    box-shadow: inset 0px 0px 5px #FC325D;
`;

const InnerElementBlue = styled.div`
    ${commonInnerElements}
    width: 44px;
    height: 44px;
    top: 6px;
    left: 6px;
    border-radius: 44px;
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
`;

const InnerElementSmall = styled.div`
    ${commonInnerElements}
    width: 26px;
    height: 26px;
    border-radius: 26px;
    top: 4px;
    left: 4px;
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
    box-shadow: inset 0px 0px 5px #FC325D;
`;

const InnerElementBlueSmall = styled.div`
    ${commonInnerElements}
    width: 22px;
    height: 22px;
    border-radius: 22px;
    top: 5px;
    left: 5px;
    background: linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%);
`;

export const Rectangle = styled.div`
    width: 11px;
    height: 11px;

    background: #FB325C;
    box-shadow: 0px 0px 4px 1px #FF0538;

`

export default Button;
