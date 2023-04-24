import React, { useState } from "react";
import styled from "styled-components";
import strawberryBg from "./strawberry-bg.jpg";
import strawberryDec from "./strawberry-dec.png";
import userIcon from "./user-icon.png";
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
    background: linear-gradient(178.89deg, #113750 1.5%, #081E2E 25.42%, #010D1A 37.75%, rgba(1, 16, 30, 0.91) 56.66%, #041B31 99.08%);
`;

const WrapperBorder = styled.div`
    position: absolute;
        border-radius: 45px;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    background: radial-gradient(93.11% 209.5% at 2.89% 5.67%, rgba(38, 209, 220, 0.11) 0%, rgba(134, 248, 255, 0.34) 100%);
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
    background: linear-gradient(178.89deg, #113750 1.5%, #081E2E 25.42%, #010D1A 37.75%, rgba(1, 16, 30, 0.91) 56.66%, rgba(1, 18, 34, 0) 99.08%), url('${strawberryBg}');
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
    background: linear-gradient(180deg, #3E687E 0%, #071C27 51.04%, #135468 100%);
    content: '';
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const LoginText = styled.h1`
    color: white;
    font-size: 24px;
    margin-left: -5px;
    font-weight: 200;
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
    background: linear-gradient(90deg, #246A89 0%, #0F2630 49.23%, #246A89 100%);
    border-radius: 30px;
`;

const LoginButtonBg = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    height: 43px;
    margin: 1px;

    background: linear-gradient(270deg, #0A4355 0%, #03141E 55.73%, #0E506C 100%);
    border-radius: 30px;
    padding: 3px 5px 5px 5px;
    box-sizing: border-box;

`;

const LoginButtonContainerBg = styled.div`
    position: relative;
    margin: 1px;
    border-radius: 30px;
    flex: 1;
    background: linear-gradient(91.1deg, #24B2D1 16.35%, #2A6E94 100.25%),
        linear-gradient(90deg, rgba(91, 220, 228, 0.99) 0%, rgba(47, 149, 155, 0.99) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 15px;
        font-weight: 200;
    }
`;

const LoginButtonContainerBorder = styled.div`
    position: absolute;
    border-radius: 30px;
    top: 3px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: linear-gradient(90deg, rgba(91, 220, 228, 0.99) 0%, rgba(47, 149, 155, 0.99) 100%);
`;

const ForgotPassword = styled.a`
  color: white;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  text-align: right;
  margin: 10px 10px 20px 0;
  font-weight: 300;
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

const Login = ({ loginUrl, onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // perform login logic here
        onLogin();
    };

    return (
        <Wrapper>
            <WrapperBorder />
            <WrapperBackground>
                <Container>
                    <ContainerBorder />
                    <ContainerBg>
                        <Header>
                            <StyledDecoration src={strawberryDec} alt="Strawberry" />
                            <LoginText>Login</LoginText>
                        </Header>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <UserIcon src={userIcon} />
                                <TextField
                                    onChange={(value) => setUsername(value)}
                                    placeholder="Username"
                                    controlledValue={username}
                                />
                            </Row>
                            <Row>
                                <PasswordIcon src={passwordIcon} />
                                <TextField
                                    onChange={(value) => setPassword(value)}
                                    placeholder="Password"
                                    controlledValue={password}
                                    isPassword
                                />
                            </Row>
                            <LoginButtonWrapper type="submit">
                                <LoginButtonBorder />
                                <LoginButtonBg>
                                    <LoginButtonContainerBorder />
                                    <LoginButtonContainerBg>
                                        <span>Login</span>
                                    </LoginButtonContainerBg>
                                </LoginButtonBg>
                            </LoginButtonWrapper>
                        </Form>
                        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
                    </ContainerBg>
                </Container>
            </WrapperBackground>
        </Wrapper>
    );
};

export default Login;
