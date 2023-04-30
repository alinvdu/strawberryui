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

const Button = ({ icon, children, variant = VARIANTS.RED, theme="dark", sizeVariant = SIZER_VARIANTS.NORMAL, ...rest }) => {
    if (sizeVariant === SIZER_VARIANTS.NORMAL) {
        return (
            <StyledButton {...rest}>
                <BackgroundElementBorder theme={theme} />
                <BackgroundElement theme={theme} />
                {variant === VARIANTS.RED ? <CircleElement theme={theme} /> : <CircleElementBlue theme={theme} />}
                {variant === VARIANTS.RED ?
                    <InnerElement theme={theme}>
                        {icon}
                    </InnerElement> :
                    <InnerElementBlue theme={theme}>
                        {icon}
                    </InnerElementBlue>
                }
            </StyledButton>
        );
    }

    return (
        <StyledButtonSmall {...rest}>
            <BackgroundElementBorderSmall theme={theme} />
            <BackgroundElementSmall theme={theme} />
            {variant === VARIANTS.RED ? <CircleElementSmall theme={theme} /> : <CircleElementBlueSmall theme={theme} />}
            {variant === VARIANTS.RED ?
                <InnerElementSmall theme={theme}>
                    {icon}
                </InnerElementSmall> :
                <InnerElementBlueSmall theme={theme}>
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
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #06151C 0%, #08121A 100%)` : `linear-gradient(138.87deg, #E5E8ED 13.91%, #BACDDD 86.52%)`};
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
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #424145 0%, rgba(0, 0, 0, 0) 72%)`
        : `linear-gradient(180deg, #AF94FF 0%, rgba(79, 39, 200, 0) 100%);`};
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
    background: ${({ theme }) => theme === 'dark' ?
        `conic-gradient(from 180deg at 50% 50%, #173B4B 0deg, #155683 47.94deg, #6A2830 90.36deg, #2F689F 142.76deg, #15D0F5 211.68deg, #1D3646 310.97deg, #13303D 358.44deg, #163B4A 360deg)` :
        `conic-gradient(from 180deg at 50% 50%,#8ddcff 17deg,#64a98c 47.94deg,#ffc7ce 90.36deg,#487fb5 142.76deg,#15D0F5 211.68deg,rgba(134,224,242,1) 283deg,rgba(134,224,242,1) 360deg,#28c1ff 356deg)`};
    box-shadow: 0px 0px 2px 2px rgb(17 202 211 / 38%);
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
    background: ${({ theme }) => theme === 'dark' ?
        `conic-gradient(from 180deg at 50% 50%, #173B4B 0deg, #155683 47.94deg, #6A2830 90.36deg, #2F689F 142.76deg, #15D0F5 211.68deg, #1D3646 310.97deg, #13303D 358.44deg, #163B4A 360deg)` :
        `conic-gradient(from 180deg at 50% 50%,#8ddcff 17deg,#64a98c 47.94deg,#ffc7ce 90.36deg,#487fb5 142.76deg,#15D0F5 211.68deg,rgba(134,224,242,1) 283deg,rgba(134,224,242,1) 360deg,#28c1ff 356deg)`};
    box-shadow: 0px 0px 2px 2px rgb(17 202 211 / 38%);
`;

const commonInnerElements = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%)`
        : `linear-gradient(138.87deg, #E5E8ED 13.91%, #BACDDD 86.52%);`};
`

const InnerElement = styled.div`
    ${commonInnerElements}
    width: 44px;
    height: 44px;
    top: 6px;
    left: 6px;
    border-radius: 44px;
    box-shadow: inset 0px 0px 5px #FC325D;
`;

const InnerElementBlue = styled.div`
    ${commonInnerElements}
    width: 44px;
    height: 44px;
    top: 6px;
    left: 6px;
    border-radius: 44px;
`;

const InnerElementSmall = styled.div`
    ${commonInnerElements}
    width: 26px;
    height: 26px;
    border-radius: 26px;
    top: 4px;
    left: 4px;
    box-shadow: inset 0px 0px 5px #FC325D;
`;

const InnerElementBlueSmall = styled.div`
    ${commonInnerElements}
    width: 22px;
    height: 22px;
    border-radius: 22px;
    top: 5px;
    left: 5px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(138.87deg, #151A24 13.91%, #0C151D 86.52%)`
        : `linear-gradient(138.87deg, #E5E8ED 13.91%, #BACDDD 86.52%);`};
`;

export const Rectangle = styled.div`
    width: 11px;
    height: 11px;

    background: #FB325C;
    box-shadow: 0px 0px 3px 1px #FF0538;

`

export default Button;
