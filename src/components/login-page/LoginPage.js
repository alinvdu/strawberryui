import React, { useState } from "react";
import styled from "styled-components";
import strawberryBg from "./strawberry-bg.jpg";
import strawberryDec from "./strawberry-dec.png";
import strawberryBgWhite from "./strawberry-bg-white.jpg";
import userIcon from "./user-icon.png";
import userIconWhite from "./user-icon-white.png";
import passwordIconWhite from "./password-icon-white.png";
import passwordIcon from "./password-icon.png";
import TextField from "../text-field/TextField";

const Wrapper = styled.div`
    position: relative;
    width: 450px;
    height: 374px;
    border-radius: 45px;
    display: flex;
    padding: 1px;
`;

const WrapperBackground = styled.div`
    position: relative;
    display: flex;
    padding: 14px;
    flex: 1;
    border-radius: 45px;
    box-sizing: border-box;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(178.89deg, #113750 1.5%, #081E2E 25.42%, #010D1A 37.75%, rgba(1, 16, 30, 0.91) 56.66%, #041B31 99.08%)`:
        `linear-gradient(178.89deg, #C0D1DC 1.5%, #B0CCE1 25.42%, #EBF0F4 37.75%, rgba(163, 192, 220, 0.91) 56.66%, #C5DCF1 99.08%)`};
`;

const WrapperBorder = styled.div`
    position: absolute;
    border-radius: 45px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${({ theme }) => theme === 'dark' ? 'radial-gradient(93.11% 209.5% at 2.89% 5.67%, rgba(38, 209, 220, 0.11) 0%, rgba(134, 248, 255, 0.34) 100%)' :
        `radial-gradient(93.11% 209.5% at 2.89% 5.67%, rgba(96, 213, 220, 0.11) 0%, rgba(118, 244, 252, 0.34) 100%)`};
`;

const Container = styled.div`
    position: relative;
    flex: 1;
    display: flex;
`;

const ContainerBg = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${({ theme }) => theme ==='dark' ? `linear-gradient(178.89deg, #113750 1.5%, #081E2E 25.42%, #010D1A 37.75%, rgba(1, 16, 30, 0.91) 56.66%, rgba(1, 18, 34, 0) 99.08%), url('${strawberryBg}')` :
        `linear-gradient(178.89deg, #DAE9F3 1.5%, #B8D2E6 25.42%, #AEC7E2 37.75%, rgba(154, 182, 209, 0.91) 56.66%, rgba(134, 159, 182, 0.14253) 92.95%, rgba(135, 178, 217, 0) 99.08%), url('${strawberryBgWhite}')`};
    border-radius: 45px;
    box-sizing: border-box;
    padding: 5px;
    padding-right: 15px;
    margin: 1px;
`;

const ContainerBorder = styled.div`
    position: absolute;
    border-radius: 45px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #3E687E 0%, #071C27 51.04%, #135468 100%)` :
        `linear-gradient(180deg, #AEDDF7 0%, #79A3BA 51.04%, #69D5F8 100%);`};
    content: '';
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    color: ${({ theme }) => theme === 'dark' ? '#FFFFFF' : '#126065'};
`;

const LoginText = styled.h1`
    font-size: 24px;
    margin-left: -5px;
    font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-top: -10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const LoginButtonWrapper = styled.button`
    display: flex;
    position: relative;
    border-radius: 30px;
    color: white;
    font-size: 18px;
    margin-left: 76px;
    height: 45px;
    background: none;
    border: none;
    padding: 0;
`;

const LoginButtonBorder = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(90deg, #246A89 0%, #0F2630 49.23%, #246A89 100%)` :
        `linear-gradient(90deg, #A9D1E3 0%, #8BB1C1 49.23%, #B3DDF0 100%)`};
    border-radius: 30px;
`;

const LoginButtonBg = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    height: 43px;
    margin: 1px;

    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(270deg, #0A4355 0%, #03141E 55.73%, #0E506C 100%)` :
        `linear-gradient(270deg, #8ACADE 0%, #93B0C0 55.73%, #B3DAEB 100%)`};
    border-radius: 30px;
    padding: 3px 5px 5px 5px;
    box-sizing: border-box;
`;

const LoginButtonContainerBg = styled.div`
    position: relative;
    margin: 1px;
    border-radius: 30px;
    flex: 1;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(91.1deg, #24B2D1 16.35%, #2A6E94 100.25%), linear-gradient(90deg, rgba(91, 220, 228, 0.99) 0%, rgba(47, 149, 155, 0.99) 100%)` :
        `linear-gradient(91.1deg, #5AC4DB 16.35%, #50798F 100.25%);`};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 15px;
        font-weight: 300;
    }
`;

const LoginButtonContainerBorder = styled.div`
    position: absolute;
    border-radius: 30px;
    top: 3px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(90deg, rgba(91, 220, 228, 0.99) 0%, rgba(47, 149, 155, 0.99) 100%)` :
        `linear-gradient(90deg, rgba(91, 220, 228, 0.99) 0%, rgba(47, 149, 155, 0.99) 100%);`};
`;

const ForgotPassword = styled.a`
  color: ${({ theme }) => theme === 'dark' ? '#FFFFFF' : '#126065'};
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  text-align: right;
  margin: 10px 10px 20px 0;
  font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
`;

const StyledDecoration = styled.img`
    margin-left: -15px;
    margin-top: -8px;
`;

const UserIcon = styled.img`
    margin-right: 2px;
`;
const PasswordIcon = styled.img`
    margin-right: 2px;
`;

const Login = ({ loginUrl, onLogin, theme = 'dark' }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <Wrapper>
            <WrapperBorder theme={theme} />
            <WrapperBackground theme={theme}>
                <Container>
                    <ContainerBorder theme={theme} />
                    <ContainerBg theme={theme}>
                        <Header theme={theme}>
                            <StyledDecoration src={strawberryDec} alt="Strawberry" />
                            <LoginText>Login</LoginText>
                        </Header>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <UserIcon src={theme === 'dark' ? userIcon : userIconWhite} />
                                <TextField
                                    onChange={(value) => setUsername(value)}
                                    placeholder="Username"
                                    controlledValue={username}
                                    theme={theme}
                                />
                            </Row>
                            <Row>
                                <PasswordIcon src={theme === 'dark' ? passwordIcon : passwordIconWhite} />
                                <TextField
                                    onChange={(value) => setPassword(value)}
                                    placeholder="Password"
                                    controlledValue={password}
                                    isPassword
                                    theme={theme}
                                />
                            </Row>
                            <LoginButtonWrapper type="submit">
                                <LoginButtonBorder theme={theme} />
                                <LoginButtonBg theme={theme}>
                                    <LoginButtonContainerBorder theme={theme} />
                                    <LoginButtonContainerBg theme={theme}>
                                        <span>Login</span>
                                    </LoginButtonContainerBg>
                                </LoginButtonBg>
                            </LoginButtonWrapper>
                        </Form>
                        <ForgotPassword theme={theme} href="#">Forgot Password?</ForgotPassword>
                    </ContainerBg>
                </Container>
            </WrapperBackground>
        </Wrapper>
    );
};

export default Login;
