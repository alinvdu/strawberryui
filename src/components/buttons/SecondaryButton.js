import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.button`
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 40px;

    background: linear-gradient(180deg, #5FBCD0 0%, #338AA6 100%);
    border: 1px solid #79A8CE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:focus-visible {
        outline: none;
        border: 1px solid ${({ theme }) => theme === 'dark' ? '#FFFFFF' : '#000000'};
    }
`;

const SecondaryButton = React.forwardRef(({ icon, onClick, theme }, ref) => (
    <StyledWrapper ref={ref} onClick={onClick} theme={theme}>
        {icon}
    </StyledWrapper>
));

SecondaryButton.propTypes = {
    icon: PropTypes.element.isRequired,
};

export default SecondaryButton
