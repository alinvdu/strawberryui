import React, { useState } from 'react';
import styled from 'styled-components';

import PrimaryButton, { SIZER_VARIANTS } from '../buttons/PrimaryButton';
import { VARIANTS } from '../buttons/PrimaryButton';
import { AcceptIcon } from './TextFieldsUtils';

const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    background: linear-gradient(270deg, #072027 0%, #061B26 55.73%, #05202C 100%);
    border: 1px solid #142A34;
    border-radius: 27.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 11px);
    height: 45px;
    background: linear-gradient(217.3deg, #000D19 21.62%, #001020 86.1%);
    border-radius: 27.5px;
    margin-top: -4px;
    padding: 8px;
    box-sizing: border-box;
`;

const InputWrapper = styled.div`
    flex: 1;
    display: flex;
    position: relative;
`;

const Input = styled.input`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    background: transparent;
    border: none;
    color: white;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    font-size: 15px;
    text-align: center;
    flex: 1;
`;

const InputBorder = styled.div`
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #011020 0%, rgba(42, 106, 111, 0.99) 44.79%, #010F1D 100%);
`;

const TextField = ({ onSubmit, onChange, placeholder, controlledValue, isPassword = false }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    } {
      setValue(e.target.value);
    }
  };

  const handleButtonClick = () => {
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <Wrapper>
      <Container>
        {onSubmit && <PrimaryButton icon={<AcceptIcon />} variant={VARIANTS.BLUE} sizeVariant={SIZER_VARIANTS.SMALL} onClick={handleButtonClick}>Submit</PrimaryButton>}
        <InputWrapper>
            <Input type={isPassword ? "password" : "text"} placeholder={placeholder || 'Strawberry Fields Forever'} value={onChange ? controlledValue : value} onChange={handleInputChange} onClick={(e) => e.stopPropagation()} />
            <InputBorder />
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default TextField;
