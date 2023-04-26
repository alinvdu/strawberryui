import styled from 'styled-components';
import { useState } from 'react';

import presentationBg from './assets/images/presentation-bg.jpg';
import logoBg from './assets/images/logo-bg.png';
import iconGroup1 from './assets/images/icon-group-1.png';
import iconGroup2 from './assets/images/icon-group-2.png';
import MusicWidget from '../components/music-widget/MusicWidget';
import LoginPage from '../components/login-page/LoginPage';
import Pagination from '../components/pagination/Pagination';
import TextField from '../components/text-field/TextField';
import Calendar from '../components/calendar/Calendar';
import Slider from '../components/slider/Slider';
import TimeWidget from '../components/time-widget/TimeWidget';
import ToDoList, { DeleteButton } from '../components/to-do-list/ToDoList';
import PrimaryButton, { VARIANTS } from '../components/buttons/PrimaryButton';
import { AcceptIcon } from '../components/text-field/TextFieldsUtils';

const Wrapper = styled.div`
    background: radial-gradient(101.13% 168.45% at 99.5% 0.53%, #2E3C44 3.12%, #253439 39.06%, #232D36 46.88%, #2D3D42 100%);
    padding: 42px;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
`;

const Container = styled.div`
    background: radial-gradient(98.36% 98.36% at 100% -1.24%, rgba(49, 59, 71, 0.88) 0%, rgba(88, 101, 115, 0.39) 25.13%, rgba(54, 63, 72, 0.49) 38.54%, rgba(30, 39, 50, 0.76) 53.16%, rgba(34, 43, 53, 0.29) 72.92%, rgba(27, 36, 44, 0.78) 82.63%, rgba(21, 29, 35, 0.42) 100%), url(${presentationBg});
    background-attachment: fixed;
    mix-blend-mode: normal;
    box-shadow: -14px 14px 20px 8px rgba(0, 0, 0, 0.49);
    border-radius: 30px;
    flex: 1;
    display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LeftComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 100%;
    padding: 0 28px;
    box-sizing: border-box;
`;

const RightComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    box-sizing: border-box;
    padding: 62px 14px 14px 14px;
    position: relative; /* to position the widget button */
    height: 100%;
    background: linear-gradient(89.93deg, rgba(0, 0, 0, 0.2) 0.71%, rgba(0, 0, 0, 0) 19.33%);
    border-left: 1px solid rgba(0, 157, 167, 0.15);
    border-radius: 30px;
`;

const LogoBg = styled.div`
    margin-top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 279px;
    background-image: url('${logoBg}');
`;

const LogoText = styled.h1`
    font-size: 34px;
    font-weight: 300;
    color: white;
    margin-top: -15px;
`;

const WidgetButton = styled.button`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    width: 210px;
    height: 40px;
    min-height: 40px;

    border: 1px solid rgba(38, 209, 220, 0.99);
    box-shadow: 0px 0px 9px 1px rgba(38, 209, 220, 0.8);
    border-radius: 22.5px;
    background: none;
    color: rgba(38, 209, 220, 0.99);
    font-size: 16px;
`;

const SelectionWrapper = styled.div`
    border: ${({ isActive }) => isActive ? '1px solid rgba(38, 209, 220, 0.99)' : '1px solid transparent'};
    box-shadow: ${({ isActive }) => isActive ? '0px 0px 15px 1px rgba(38, 209, 220, 0.79)' : ''};
    border-radius: 30px;
    margin-bottom: 65px;
    display: flex;
    cursor: pointer;

    &:hover {
        border: ${({ isActive }) => isActive ? '1px solid rgba(38, 209, 220, 0.99)' : '1px solid rgba(38, 209, 220, 0.59)'};
    }
`;

const ContentSelection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
`;

const ContentTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin-top: 0px;
`;

const ContentDescription = styled.p`
    font-size: 16;
    font-weight: 300;
    margin: 0;
`;

const StyledIconGroup1 = styled.img``;

const StyledIconGroup2 = styled.img`
    padding: 5px 10px 6px 10px;
`;

const IconWrapper = styled.div`
    min-width: 136px;
`;

const OpenSourceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`;

const OpenSourceTitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 400;
`;

const OpenSourceDescription = styled.p`
    font-size: 16px;
    margin: 6px 0px 0px 0px;
    font-weight: 300;
`;

const OpenSourceLink = styled.a`
    margin-top: 25px;
    color: rgba(102, 227, 255, 1);
    cursor: pointer;
`;

const LeftContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px;
`;

const SelectionComponent = ({ title, description, icon, onClick, isActive }) => (
    <SelectionWrapper isActive={isActive} onClick={onClick}>
        <IconWrapper>
            {icon}
        </IconWrapper>
        <ContentSelection>
            <ContentTitle>
                {title}
            </ContentTitle>
            <ContentDescription>
                {description}
            </ContentDescription>
        </ContentSelection>
    </SelectionWrapper>
);

const ComponentListWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
    height: 100%;
`;

const ContentSelectionList = ({ handleOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState('components');

    const handleSelection = (option) => {
        setSelectedOption(option);
        handleOptionSelect(option);
    };

    return (
        <div>
            <SelectionComponent
                title="Strawberry themed user interface"
                description="Incorporates the vibrant colors and visual elements of a strawberry into its layout."
                icon={<StyledIconGroup1 src={iconGroup1} />}
                onClick={() => handleSelection('components')}
                isActive={selectedOption === 'components'}
            />
            <SelectionComponent
                title="Made with Midjourney and ChatGPT"
                description="Prompts made available for faster prototyping and development."
                icon={<StyledIconGroup2 src={iconGroup2} />}
                onClick={() => handleSelection('prompts')}
                isActive={selectedOption === 'prompts'}
            />
        </div>
    );
};

const ComponentWrapper = styled.div`
    margin: 0 22px 22px 0;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 22px;
`;

const ColumnItem = styled.div`
    margin-bottom: 22px;
`;

const ComponentList = () => (
    <ComponentListWrapper>
        <Column>
            <ColumnItem>
                <MusicWidget
                    author="David Bowie"
                    title="Space Oddity"
                    album="The Rise and Fall of Ziggy Stardust and the Spider from Mars"
                    onPause={() => {

                    }}
                    onPlay={() => {

                    }}
                />
            </ColumnItem>
            <ColumnItem>
                <ToDoList items={[{
                    description: 'Strawberry Fields Forever',
                    done: false
                }, {
                    description: 'Lucy in the Sky with Diamonds',
                    done: false
                }, {
                    description: 'Strawberry Fields Forever',
                    done: false
                }, {
                    description: 'Lucy in the Sky with Diamonds',
                    done: false
                }]} />
            </ColumnItem>
        </Column>
        <Column>
            <ColumnItem>
                <LoginPage
                    url='localhost'
                    onLogin={() => {
                        alert("login clicked")
                    }}
                />
            </ColumnItem>
            <ColumnItem>
                <div style={{
                    display: 'flex',
                }}>
                    <Calendar />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '20px'
                    }}>
                        <Slider />
                        <div style={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <PrimaryButton icon={<AcceptIcon />} />
                            <div style={{
                                marginTop: 10
                            }}>
                                <PrimaryButton icon={<DeleteButton>X</DeleteButton>} variant={VARIANTS.BLUE} />
                            </div>
                        </div>
                    </div>
                </div>
            </ColumnItem>
        </Column>
        <Column>
            <ColumnItem>
                <TimeWidget />
            </ColumnItem>
            <ColumnItem>
                <ComponentWrapper>
                    <Pagination
                        totalElements={100}
                        elementsPerPage={10}
                        onPageChange={() => { }}
                    />
                    <div style={{
                        marginTop: '20px',
                    }}>
                        <TextField onSubmit={() => { }} />
                    </div>
                </ComponentWrapper>
            </ColumnItem>
        </Column>
    </ComponentListWrapper>
);

const ApiAndPrompts = () => {
    // implementation
};

const App = () => {
    const [selectedOption, setSelectedOption] = useState('components');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <Wrapper>
            <Container>
                <MainContainer>
                    <LeftComponent>
                        <LogoBg>
                            <LogoText>Strawberry UI</LogoText>
                        </LogoBg>
                        <LeftContentWrapper>
                            <ContentSelectionList handleOptionSelect={handleOptionSelect} />
                            <OpenSourceWrapper>
                                <OpenSourceTitle>
                                    Open Source
                                </OpenSourceTitle>
                                <OpenSourceDescription>
                                    It's free and you can contribute directly!
                                </OpenSourceDescription>
                                <OpenSourceLink>
                                    Learn More
                                </OpenSourceLink>
                            </OpenSourceWrapper>
                        </LeftContentWrapper>
                    </LeftComponent>
                    <RightComponent>
                        <WidgetButton>npm install strawberry-ui</WidgetButton>
                        {selectedOption === 'components' ? <ComponentList /> : <ApiAndPrompts />}
                    </RightComponent>
                </MainContainer>
            </Container>
        </Wrapper>
    );
};

export default App;
