import styled, { css } from 'styled-components';
import { useState } from 'react';

import presentationBg from './assets/images/presentation-bg.jpg';
import presentationBgWhite from './assets/images/presentation-bg-white.jpg';
import logoBg from './assets/images/logo-bg.png';
import iconGroup1 from './assets/images/icon-group-1.png';
import iconGroup2 from './assets/images/icon-group-2.png';
import iconGroup1White from './assets/images/icon-group-1-white.png';
import iconGroup2White from './assets/images/icon-group-2-white.png';
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
import { useRef } from 'react';
import { useEffect } from 'react';
import calendarPromptHistory from "../components/calendar/messages/messages.json";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}

const Wrapper = styled.div`
    background: ${({ theme }) => theme === 'dark' ? `radial-gradient(101.13% 168.45% at 99.5% 0.53%, #2E3C44 3.12%, #253439 39.06%, #232D36 46.88%, #2D3D42 100%)` :
        `radial-gradient(101.13% 168.45% at 99.5% 0.53%, #A8A8A8 3.12%, #84BDCF 39.06%, #95BBDF 46.88%, #78A9B9 100%);`};
    padding: 42px;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    min-height: 100%;

    @media
        (min-width: 0px) and (max-width: 600px) {
        padding: 14px;
    }
`;

const Container = styled.div`
    background: ${({ theme }) => theme === 'dark' ? `radial-gradient(98.36% 98.36% at 100% -1.24%, rgba(49, 59, 71, 0.88) 0%, rgba(88, 101, 115, 0.39) 25.13%, rgba(54, 63, 72, 0.49) 38.54%, rgba(30, 39, 50, 0.76) 53.16%, rgba(34, 43, 53, 0.29) 72.92%, rgba(27, 36, 44, 0.78) 82.63%, rgba(21, 29, 35, 0.42) 100%), url(${presentationBg})` :
        `radial-gradient(98.36% 98.36% at 100% -1.24%, rgba(108, 156, 216, 0.78) 0%, rgba(210, 218, 227, 0.39) 25.13%, rgba(214, 217, 220, 0.49) 38.54%, rgba(189, 208, 228, 0.76) 53.16%, rgba(156, 181, 209, 0.29) 72.92%, rgba(186, 202, 218, 0.78) 82.63%, rgba(166, 211, 244, 0.42) 100%), url('${presentationBgWhite}');`};
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme === 'dark' ? `#0b1118` : `#bed3e3`};
    mix-blend-mode: normal;
    box-shadow: -14px 14px 20px 8px rgba(0, 0, 0, 0.49);
    border-radius: 30px;
    flex: 1;
    display: flex;

    @media (min-width: 1920px) and (max-width: 3000px) {
        background-size: cover;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex: 1;

    @media
        (min-width: 0px) and (max-width: 800px) {
            flex-direction: column;
    }
`;

const LeftComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 100%;
    padding: 0 28px;
    box-sizing: border-box;

    @media
        (min-width: 1820px) and (max-width: 1870px),
        (min-width: 1450px) and (max-width: 1500px),
        (min-width: 1050px) and (max-width: 1100px) {
            width: 450px;
    }

    @media
        (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            width: 400px;
    }

    @media
        (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px) {
            width: 350px;
    }

    @media
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px) {
            width: 300px;
    }

    @media
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px) {
            width: 250px;
    }

    @media
        (min-width: 800px) and (max-width: 850px) {
            width: 200px;
    }

    @media
        (min-width: 0px) and (max-width: 800px) {
            width: 100%;
    }
`;

const RightComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    box-sizing: border-box;
    padding: 62px 14px 14px 14px;
    position: relative;
    height: 100%;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(89.93deg, rgba(0, 0, 0, 0.2) 0.71%, rgba(0, 0, 0, 0) 19.33%)` :
        `linear-gradient(89.93deg, rgba(42, 119, 124, 0.1) 0.71%, rgba(0, 0, 0, 0) 19.33%)`};
    border-left: 1px solid ${({ theme }) => theme === 'dark' ? `rgba(0, 157, 167, 0.15)` : `rgba(1, 80, 85, 0.15)`};
    border-radius: 30px;

    @media only screen and (min-width: 1610px) and (max-width: 1770px) {
        align-items: center;
    }

    @media only screen and (min-width: 0px) and (max-width: 1250px) {
        align-items: center;
    }

    @media
        (min-width: 0px) and (max-width: 800px) {
        padding: 14px;
    }
`;

const LogoWrapper = styled.div`
    position: relative;
    margin-top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 279px;

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            height: 259px;
    }

    @media
        (min-width: 800px) and (max-width: 850px) {
        width: 249px;
        height: 209px;
        background-size: contain;
    }
`;

const LogoBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${logoBg}');
    opacity: ${({ theme }) => theme === 'dark' ? 0.66 : 0.85};

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            height: 259px;
    }

    @media
        (min-width: 800px) and (max-width: 850px) {
        width: 249px;
        height: 209px;
        background-size: contain;
    }
`;

const LogoText = styled.h1`
    position: relative;
    font-size: 34px;
    font-weight: 300;
    color: white;
    margin-top: -15px;
    cursor: pointer;

    @media
        (min-width: 800px) and (max-width: 850px) {
        font-size: 26px;
    }
`;

const WidgetButtonWrapper = styled.div`
    position: relative;
    display: flex;
`

const WidgetButton = styled.button`
    position: relative;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    flex-basis: 0;
    padding: 9px;
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.99)` : `#2a777c`};
    box-shadow: 0px 0px 9px 1px ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.5)` : `rgba(1, 156, 166, 0.33)`};
    border-radius: 22.5px;
    background: none;
    color: ${({ theme }) => theme === 'dark' ? `#45ecf7` : `#126065`};
    font-size: 17px;
    opacity: 0.92;
    cursor: pointer;

    &:hover {
        opacity: 1;
        box-shadow: 0px 0px 9px 1px ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.9)` : `rgba(1, 156, 166, 0.73)`};
    }

    span {
        margin-right: 10px;
        white-space: nowrap;
    }
`;

const SelectionWrapper = styled.div`
    border: ${({ isActive, theme }) => isActive ? `2px solid ${theme === 'dark' ? 'rgba(38, 209, 220, 0.99)' : '#2A777C'}` : '2px solid transparent'};
    box-shadow: ${({ isActive, theme }) => isActive ? `0px 0px 15px 1px ${theme === 'dark' ? 'rgba(38, 209, 220, 0.79)' : 'rgba(1, 156, 166, 0.33)'}` : ''};
    border-radius: 30px;
    margin-bottom: 65px;
    display: flex;
    cursor: pointer;

    &:hover {
        border: ${({ isActive, theme }) => isActive ? `2px solid ${theme === 'dark' ? 'rgba(38, 209, 220, 0.99)' : '#2A777C'}` : `2px solid ${theme === 'dark' ? 'rgba(38, 209, 220, 0.59)' : 'rgba(42, 119, 124, 0.59)'}`};
    }

    @media
        (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            padding: 8px;
    }

    @media
        (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            align-items: center;
            flex-direction: column;
            padding: 8px 8px 15px 8px;
            margin-bottom: 30px;
    }
`;

const ContentSelection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ContentTitle = styled.h2`
    font-size: 20px;
    margin-top: 0px;
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};

    @media
        (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            font-size: 18px;
            margin-left: 5px;
    }

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
        font-size: 18px;
        text-align: center;
    }
`;

const ContentDescription = styled.p`
    font-size: 16;
    margin: 0;
    

    @media (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            font-size: 15px;
            margin-left: 5px;
    }

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            font-size: 15px;
            margin-left: 5px;
            text-align: center;
    }
`;

const StyledIconGroup1 = styled.img`
    @media (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px){
            width: 100px;
    }
    
    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            width: 120px;
    }
`;

const StyledIconGroup2 = styled.img`
    padding: 5px 10px 6px 10px;

    @media
        (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            width: 90px;
            padding: 0;
    }

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            width: 100px;
            padding: 0;
    }
`;

const IconWrapper = styled.div`
    min-width: 136px;

    @media (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1000px) and (max-width: 1050px) {
            min-width: 100px;
    }

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            width: 120px;
            display: flex;
            justify-content: center;
    }
`;

const OpenSourceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;

    @media (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1300px) and (max-width: 1350px),
        (min-width: 900px) and (max-width: 950px),
        (min-width: 1250px) and (max-width: 1300px),
        (min-width: 850px) and (max-width: 900px),
        (min-width: 800px) and (max-width: 850px) {
            margin-top: 35px;
    }
`;

const OpenSourceTitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 400;

    @media (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1000px) and (max-width: 1050px) {
            font-size: 18px;
    }
`;

const OpenSourceDescription = styled.p`
    font-size: 16px;
    margin: 6px 0px 0px 0px;
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};

    @media (min-width: 1770px) and (max-width: 1820px),
        (min-width: 1400px) and (max-width: 1450px),
        (min-width: 1350px) and (max-width: 1400px),
        (min-width: 950px) and (max-width: 1000px),
        (min-width: 1000px) and (max-width: 1050px) {
            font-size: 16px;
    }
`;

const OpenSourceLink = styled.a`
    margin-top: 25px;
    color: ${({ theme }) => theme === 'dark' ? `rgba(102, 227, 255, 1)` : `#00858D`};
    cursor: pointer;
`;

const LeftContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px;
    color: ${({ theme }) => theme === 'dark' ? 'white' : '#126065'};
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
`;

const SelectionComponent = ({ title, description, icon, onClick, isActive, theme }) => (
    <SelectionWrapper isActive={isActive} onClick={onClick} theme={theme}>
        <IconWrapper>
            {icon}
        </IconWrapper>
        <ContentSelection>
            <ContentTitle theme={theme}>
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

    @media only screen and (min-width: 0px) and (max-width: 1250px) {
        justify-content: center;
    }
`;

const ContentSelectionList = ({ handleOptionSelect, theme, selectedOption }) => {

    const handleSelection = (option) => {
        handleOptionSelect(option);
    };

    return (
        <div>
            <SelectionComponent
                title="Strawberry themed user interface"
                description="Incorporates the vibrant colors and visual elements of a strawberry into its layout."
                icon={<StyledIconGroup1 src={theme === 'dark' ? iconGroup1 : iconGroup1White} />}
                onClick={() => handleSelection('components')}
                isActive={selectedOption === 'components'}
                theme={theme}
            />
            <SelectionComponent
                title="Made with Midjourney and ChatGPT"
                description="Prompts made available for faster prototyping and development."
                icon={<StyledIconGroup2 src={theme === 'dark' ? iconGroup2 : iconGroup2White} />}
                onClick={() => handleSelection('prompts')}
                isActive={selectedOption === 'prompts'}
                theme={theme}
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

    @media only screen and (min-width: 0px) and (max-width: 800px) {
        margin-right: 0px;
    }
`;

const ColumnItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
`;

const ColumnItemSmall = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
    max-width: 350px;
`;

const THREE_COLUMNS_THRESHOLD = 1213;

const ONE_COLUMN_THRESHOLD = 500

const renderMusicWidget = (theme) => (
    <MusicWidget
        author="David Bowie"
        title="Space Oddity"
        album="The Rise and Fall of Ziggy Stardust and the Spider from Mars"
        onPause={() => {

        }}
        onPlay={() => {

        }}
        theme={theme}
    />
);

const renderToDoList = (theme) => (
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
    }]} theme={theme} />
);

const renderPaginationAndTextField = (theme) => (
    <ComponentWrapper>
        <Pagination
            totalElements={100}
            elementsPerPage={10}
            onPageChange={() => { }}
            theme={theme}
        />
        <div style={{
            marginTop: '20px',
        }}>
            <TextField onSubmit={() => { }} theme={theme} />
        </div>
    </ComponentWrapper>
);

const renderLoginPage = (theme, width) => (
    <LoginPage
        url='localhost'
        onLogin={() => {
        }}
        theme={theme}
        width={width}
    />
);

const renderCalendarAndOthers = (theme, showOthers) => (
    <div style={{
        display: 'flex',
    }}>
        <Calendar theme={theme} />
        <div style={{
            display: showOthers ? 'flex' : 'none',
            flexDirection: 'column',
            marginLeft: '20px'
        }}>
            <Slider theme={theme} />
            <div style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <PrimaryButton icon={<AcceptIcon />} theme={theme} />
                <div style={{
                    marginTop: 10
                }}>
                    <PrimaryButton icon={<DeleteButton>X</DeleteButton>} variant={VARIANTS.BLUE} theme={theme} />
                </div>
            </div>
        </div>
    </div>
);

const ComponentList = ({ theme }) => {
    const componentListRef = useRef(null);
    const [dummy, setDummyState] = useState(0);

    const handleUpdateDummy = () => {
        setDummyState(Math.random());
    };

    useEffect(() => {
        setTimeout(() => {
            handleUpdateDummy();
        }, 50);

        window.addEventListener('resize', handleUpdateDummy, false);

        return () => {
            window.removeEventListener('resize', handleUpdateDummy);
        };
    }, []);

    const smallerThanOneColumn = componentListRef.current && componentListRef.current.offsetWidth < ONE_COLUMN_THRESHOLD;
    const loginPageWidth = smallerThanOneColumn ? 350 : 450;


    if (componentListRef.current && componentListRef.current.offsetWidth < THREE_COLUMNS_THRESHOLD) {
        return (
            <ComponentListWrapper ref={componentListRef}>
                <Column>
                    <ColumnItemSmall>
                        {renderMusicWidget(theme)}
                    </ColumnItemSmall>
                    <ColumnItem style={{
                        marginTop: 10
                    }}>
                        {renderToDoList(theme)}
                    </ColumnItem>
                    <ColumnItemSmall style={{
                        marginTop: 15
                    }}>
                        {renderPaginationAndTextField(theme)}
                    </ColumnItemSmall>
                </Column>
                <Column>
                    <ColumnItem>
                        {renderLoginPage(theme, loginPageWidth)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderCalendarAndOthers(theme, !smallerThanOneColumn)}
                    </ColumnItem>
                    <ColumnItem>
                        <TimeWidget theme={theme} />
                    </ColumnItem>
                </Column>
            </ComponentListWrapper>
        )
    }

    return (
        <ComponentListWrapper ref={componentListRef}>
            <Column>
                <ColumnItemSmall>
                    {renderMusicWidget(theme)}
                </ColumnItemSmall>
                <ColumnItemSmall>
                    {renderToDoList(theme)}
                </ColumnItemSmall>
            </Column>
            <Column>
                <ColumnItem>
                    {renderLoginPage(theme, loginPageWidth)}
                </ColumnItem>
                <ColumnItem>
                    {renderCalendarAndOthers(theme, !smallerThanOneColumn)}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItemSmall>
                    <TimeWidget theme={theme} />
                </ColumnItemSmall>
                <ColumnItemSmall>
                    {renderPaginationAndTextField(theme)}
                </ColumnItemSmall>
            </Column>
        </ComponentListWrapper>
    );
};

const ApiAndPromptsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: 0px) and (max-width: 1250px) {
        justify-content: center;
    }
`;

const PromptTitle = styled.div`
    font-size: 20px;
    margin-top: 20px;
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
    margin-bottom: 20px;

    color: ${({ theme }) => theme === 'dark' ? 'white' : '#126065'};
`;

const PromptWrapper = styled.div`
    background: ${({ theme }) => theme === 'dark' ? `rgba(19, 31, 36, 1)` : `#a8cbdb`};
    width: 350px;
    padding: 20px;
    padding-bottom: 15px;
    border: 1px solid ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.29)` : `#61a7ab`};
    border-radius: 30px;
    margin-bottom: 5px;
    box-sizing: border-box;

    color: ${({ theme }) => theme === 'dark' ? `#fff` : `#126065`};
`;

const PromptInsideTitle = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
`;

const PromptDescription = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    max-height: ${({ isExpanded }) => !isExpanded ? '6.3em' : 'none'};
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

const Tooltip = styled.span`
    position: absolute;
    bottom: ${({ bottom }) => bottom ? `${bottom}px` : '0'};
    left: 50%;
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft}px;` : ''};
    transform: translate(-50%, -100%);
    padding: 5px;
    border-radius: 5px;
    background: ${({ theme }) => theme === 'dark' ? `rgba(19, 31, 36, 1)` : `rgba(186, 203, 225, 1)`};
    border: 1px solid ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.29)` : `#126065`};
    font-size: 14px;
    white-space: nowrap;
    z-index: 9999;
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
`;

const CopyButtonWrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

const ExpandButtonWrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

const CopyToClipboardButton = ({ onClick, fill = "rgba(38, 209, 220, 0.99)", marginTop = 0 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{
        marginTop
    }} onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill={fill}><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
);

const CheckButton = ({ fill = "rgba(38, 209, 220, 0.99)", marginTop = 0 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop }} width="24" height="24" viewBox="0 0 24 24" fill={fill}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
)

const ExpandButton = ({ onClick, onMouseEnter, onMouseLeave, fill = "rgba(38, 209, 220, 0.99)" }) => (
    <svg onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
        marginTop: 5,
        marginRight: 10
    }} fill={fill}><path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></path></svg>
);

const CollapseButton = ({ onClick, onMouseEnter, onMouseLeave, fill = "rgba(38, 209, 220, 0.99)" }) => (
    <svg onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
        marginTop: 5,
        marginRight: 10
    }} fill={fill}><path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"></path></svg>
);

const Ellipsis = styled.span`
    letter-spacing: 2px;
    opacity: 0.8;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledShowPromptHistoryButtonWrapper = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    color: rgba(38, 209, 220, 0.9);
    cursor: pointer;

    &:hover {
        color: rgba(38, 209, 220, 1);
    }
`;

const ShowPromptHistoryButton = ({ onClick }) => (
    <StyledShowPromptHistoryButtonWrapper onClick={onClick}>
        Show Prompt History
    </StyledShowPromptHistoryButtonWrapper>
);

const Prompt = ({ description, title, theme, promptHistory, setShowPromptDialog }) => {
    const [tooltipText, setTooltipText] = useState('Copy to clipboard');
    const [expandButtonTooltipText, setExpandButtonToolTipText] = useState('Show all text');
    const [showExpandedButton, setShowExpandedButton] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showExpandTooltip, setShowExpandTooltip] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current) {
            if (descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight) {
                setShowExpandedButton(true);
            }
        }
    }, []);

    return (
        <PromptWrapper theme={theme}>
            {title ? <PromptInsideTitle>{title}</PromptInsideTitle> : null}
            <PromptDescription isExpanded={isExpanded} ref={descriptionRef}>{description}</PromptDescription>
            {!isExpanded && showExpandedButton ? <Ellipsis>...</Ellipsis> : null}
            <ButtonsContainer>
                {promptHistory ? <ShowPromptHistoryButton onClick={() => {
                    setShowPromptDialog({
                        show: true,
                        promptHistory
                    });
                }} /> : null}
                <ButtonsWrapper>
                    {showExpandedButton ?
                        <ExpandButtonWrapper>
                            {!isExpanded ?
                                <ExpandButton fill={theme === 'dark' ? "rgba(38, 209, 220, 0.99)" : "#126065"} onClick={() => {
                                    setExpanded(true);
                                    setExpandButtonToolTipText('Show less');
                                    setShowExpandTooltip(false);
                                }} onMouseEnter={() => {
                                    setShowExpandTooltip(true);
                                }} onMouseLeave={() => {
                                    setShowExpandTooltip(false);
                                }} /> :
                                <CollapseButton fill={theme === 'dark' ? "rgba(38, 209, 220, 0.99)" : "#126065"} onClick={() => {
                                    setExpanded(false);
                                    setExpandButtonToolTipText('Show all text');
                                    setShowExpandTooltip(false);
                                }} onMouseEnter={() => {
                                    setShowExpandTooltip(true);
                                }} onMouseLeave={() => {
                                    setShowExpandTooltip(false);
                                }} />}
                            {showExpandTooltip ? <Tooltip theme={theme}>{expandButtonTooltipText}</Tooltip> : null}
                        </ExpandButtonWrapper> : null}
                    <CopyButtonWrapper onMouseEnter={() => {
                        setShowTooltip(true);
                    }} onMouseLeave={() => {
                        if (tooltipText !== 'Copied!') {
                            setShowTooltip(false);
                        }
                    }}>
                        {tooltipText !== 'Copied!' ?
                            <CopyToClipboardButton marginTop={5} onClick={() => {
                                let toCopyDescription = description;
                                if (typeof description === 'object') {
                                    toCopyDescription = descriptionRef.current.textContent
                                }
                                navigator.clipboard.writeText(toCopyDescription).then(() => {
                                    setTooltipText('Copied!');
                                    setTimeout(() => {
                                        setTooltipText('Copy to clipboard');
                                        setShowTooltip(false);
                                    }, 3000);
                                });
                            }} fill={theme === 'dark' ? "rgba(38, 209, 220, 0.99)" : "#126065"} /> :
                            <CheckButton fill={theme === 'dark' ? "rgba(38, 209, 220, 0.99)" : "#126065"} marginTop={5} />}
                        {showTooltip ? <Tooltip theme={theme}>{tooltipText}</Tooltip> : null}
                    </CopyButtonWrapper>
                </ButtonsWrapper>
            </ButtonsContainer>
        </PromptWrapper>
    );
};

const PromptWidgetWrapper = styled.div`
`;

const WidgetWrapper = styled.div`
    margin-bottom: 8px;
`;

const ApiAndPrompts = ({ theme, setShowPromptDialog }) => {
    const componentListRef = useRef(null);
    const [dummy, setDummyState] = useState(0);

    const handleUpdateDummy = () => {
        setDummyState(Math.random());
    };

    useEffect(() => {
        setTimeout(() => {
            handleUpdateDummy();
        }, 50);

        window.addEventListener('resize', handleUpdateDummy, false);

        return () => {
            window.removeEventListener('resize', handleUpdateDummy);
        };
    }, []);

    const renderProjectSetup = (theme) => (
        <>
            <PromptTitle theme={theme}>
                Project Setup
            </PromptTitle>
            <Prompt theme={theme} title="ChatGPT" description="We are using storybook, styled-components and create react app." />
            <Prompt theme={theme} title="ChatGPT" description="The widgets are modern with black blue background, it uses the following colors: #102131 - gradient color for background, #030714 -gradient color for background, #24111D - stroke color. Border-radius of 30px." />
        </>
    );

    const renderMusicWidgetPrompt = (theme) => (
        <PromptWidgetWrapper>
            <PromptTitle theme={theme}>
                Music Widget
            </PromptTitle>
            <WidgetWrapper>
                {renderMusicWidget(theme)}
            </WidgetWrapper>
            <Prompt theme={theme} title="ChatGPT" description={
                <div>Create a React component for a music widget, the component accepts an object interface (or prop-type) and the object has the following fields: title, author, album. It also receives four functions that will be called inside the component on the following three buttons: Pause, Play, Next Song, Previous Song.<br /><br />The dimensions of the widget are the following: 350px wide, 400px height. It's composed of two parts: the top part has the author name on top and the title of the song and album on the bottom and it has 328px height. The top part also has a background-image of a strawberry. <br /><br />The bottom part contains the buttons aligned in the center, on the left we have previous song icon, on the middle we have pause/play song and on the right we have next song icon.<br /><br />Let's add an internal state to the component with the initial value of playing = true. Then if playing is true we show the pause button, if playing is false we show the play button. If the user clicks play we change the state and the same with pause. At the same time, the component receive another prop function called onStateChange that will be called with true if the state changes to true and false otherwise.<br /><br /> Let's remove the onStateChange prop and just stick with onPlay and onPause</div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-music-widget.png strawberry-widget.png strawberry ui widget for listening to music, play button, change song, name of the artist, description, minimalist design, black and blue background, strawberry, clean, high resolution, 4k" />
        </PromptWidgetWrapper>
    );

    const renderLoginpagePrompt = () => (
        <>
            <PromptTitle theme={theme}>
                Login Page
            </PromptTitle>
            <Prompt theme={theme} title="ChatGPT" description={<div>Create a React component for Login the user. It should receive a login url and a function that will be called upon login completion.<br /><br /> The wrapper should be 450px wide by 374px height, with a border-radius of 45px. It should also have a container with a border-radius of 45px that also uses a background image with a strawberry.<br /><br />The header part contains a decorated image with a strawberry and the Login text.<br />The main part contains a form with 3 rows:<br />- The first row contains an user icon and the username textfield.<br />- The second row contains the password icon and the password textfield.<br />- The third row contains the login button.<br /><br />And the end of the component we have a row with Forgot Password question.</div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-design.png generic-strawberry.png strawberry ui widget for user input, text form, rounded outlined web input, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    const renderCalendarPrompt = (theme) => (
        <>
            <PromptTitle theme={theme}>
                Calendar
            </PromptTitle>
            <WidgetWrapper>
                <Calendar theme={theme} />
            </WidgetWrapper>
            <Prompt promptHistory={calendarPromptHistory} setShowPromptDialog={setShowPromptDialog} theme={theme} title="ChatGPT" description={<div>Create a widget component for a Calendar. It can receive a selected date, a function that will be called when the date will change. It should have a header part and main content part. The header part should have two elements that are spaced around the margins.<br /><br /> The left element should hold the date and the year and the right element should contain two arrows (left & right) that we can use in order to change the month. It should have a background that's a combination between a gradient and a strawberry image.<br /><br />Main content should hold the days of the week (S, M, T, W, T, F, S) each on a separate column and the days of the month should be divided upon those specific columns. In total should be 7 columns.</div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for calendar in the web browser, flat surface, date picker, days of the month, month, minimalist design, black and blue background, strawberry, clean, high resolution" />

        </>
    );

    const renderPaginationPrompt = (theme) => (
        <>
            <PromptTitle theme={theme}>
                Pagination
            </PromptTitle>
            <WidgetWrapper>
                <Pagination
                    totalElements={100}
                    elementsPerPage={10}
                    onPageChange={() => { }}
                    theme={theme}
                />
            </WidgetWrapper>
            <Prompt theme={theme} title="ChatGPT" description={<div>
                Create a React component for pagination. It should receive the total number of elements and how many elements are for each page as prop. It should also receive a callback function for when the page is being changed, which will be called with the page index. It should keep an internal state of it's current page.<br /><br />The component has three parts, the left container which contains the left arrow icon, the middle container which holds the pages number and the right container which contains the right icon.<br /><br />The middle container can hold up to 5 numbers, if the total number of pages are more than 5 than we can show the first page, the last page and 3 pages that are near the current page. Everything in between will be marked by dots.
            </div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-pagination.png strawberry-generic-widget.png strawberry ui widget for pagination flat in web browser, next page, prev page icons, number of entities, minimalist design, black and blue background, strawberry, clean, high resolution" />

        </>
    );

    const renderSliderPrompt = (theme) => (
        <>
            <PromptTitle theme={theme}>
                Slider
            </PromptTitle>
            <Prompt theme={theme} title="ChatGPT" description={<div>Let's create a React component for a Slider. It has the width of 66px and height of 195px & border-radius of 25px. It has a wrapper and inside the wrapper it has a container composed of 3 elements:<br />- The slider button, which is a round button that can be moved on the slider line.<br />- The slider line which is 150px height.<br />- A decorated strawberry at the base of the slider line.</div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for slider component, slider with button, line, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    const renderTimeWidgetPrompt = (theme) => (
        <>
            <PromptTitle theme={theme}>
                Time Widget
            </PromptTitle>
            <WidgetWrapper>
                <TimeWidget theme={theme} />
            </WidgetWrapper>
            <Prompt theme={theme} title="ChatGPT" description={<div>
                Lets implement a Time Widget component in React that will give the user the ability to select Hours, Minutes and Seconds.<br /><br />On top part of the widget we three columns, each of them denoting title for the list that are beneath them in which you can actually scroll and select the values.<br /><br />The first column is Hours, second is Minutes and third is Seconds.<br /><br />Beneath this three title columns there is a wide space with a decorating image of strawberries, that has full width.<br /><br />Beneath the strawberry image, we find the selected content container, it has three columns showing the user the currently selected values for each column (hours, minutes, seconds). If there is no selected value, then we show a blue line. The selected content container, has a background gradient and is delimited by shadow and border.<br /><br />Next we have three columns which contain lists for the user to pick the values that populate each column (hours, minutes, seconds). The lists are scrollable, and the center elements are the one being picked. The center elements are highlighted by two bars denoting the currently selected element. The user can also click on any value in order for the selection to jump at that specific value. For instance if the minute 13 is centered in the list, then it will be selected, if the minute 16 is not centered but the user clicks on it, the component will move it to the center and select it.<br /><br />Requirement: the scroll should be able to move just by 1 value when scrolling softly butmove faster when scrolling rapidly.
            </div>} />
            <Prompt theme={theme} title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for choosing time, text input, time component, am/pm, clock icon, dropdown list, scroll, minimalist design, black blue background, clean, high resolution" />

        </>
    );

    const renderToDoListPrompt = (theme) => (
        <>
            <PromptTitle theme={theme}>
                To Do List
            </PromptTitle>
            <WidgetWrapper>
                {renderToDoList(theme)}
            </WidgetWrapper>
            <Prompt theme={theme} title="ChatGPT" description={<div>Create a React component named ToDoList. As props it can receive a few pre-defined items, that can have the following fields: description as a string, done as a boolean. The component itself is 350px wide and 535px long. It is composed of the following elements:<br /><br />Wrapper component with a linear gradient. Container component with a linear gradient and a background picture mixed. At top it will have a decorating strawberry component image, positioned absolute relative to the container.<br /><br /> In the middle it will render the list of todos with a background and a small padding. It will also have a checkbox in front denoting if the todo is checked or not. A TextField beneath the rendered todos where the user can input the next item.<br /><br />Two buttons placed:<br />1. At the bottom in the center, add button, it has a wrapper with a border and then the button itself.<br />2. Near the first button but on right top of it. It's just a button with and X.<br /><br />The component should be able to add new items using the TextField and the Add Button, the new item should appear in the list. The rendered list should have a height of 190px and the rest should be scrollable.</div>} />
            <Prompt theme={theme} title="Design" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for user input, text form, rounded outlined web input, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    if (componentListRef.current && componentListRef.current.offsetWidth < THREE_COLUMNS_THRESHOLD) {
        return (
            <ApiAndPromptsWrapper ref={componentListRef}>
                <Column>
                    <ColumnItem>
                        {renderProjectSetup(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderMusicWidgetPrompt(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderLoginpagePrompt(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderTimeWidgetPrompt(theme)}
                    </ColumnItem>
                </Column>
                <Column>
                    <ColumnItem>
                        {renderCalendarPrompt(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderPaginationPrompt(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderSliderPrompt(theme)}
                    </ColumnItem>
                    <ColumnItem>
                        {renderToDoListPrompt(theme)}
                    </ColumnItem>
                </Column>
            </ApiAndPromptsWrapper>
        );
    }

    return (
        <ApiAndPromptsWrapper ref={componentListRef}>
            <Column>
                <ColumnItem>
                    {renderProjectSetup(theme)}
                </ColumnItem>
                <ColumnItem>
                    {renderMusicWidgetPrompt(theme)}
                </ColumnItem>
                <ColumnItem>
                    {renderLoginpagePrompt(theme)}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderCalendarPrompt(theme)}
                </ColumnItem>
                <ColumnItem>
                    {renderPaginationPrompt(theme)}
                </ColumnItem>
                <ColumnItem>
                    {renderSliderPrompt(theme)}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderTimeWidgetPrompt(theme)}
                </ColumnItem>
                <ColumnItem>
                    {renderToDoListPrompt(theme)}
                </ColumnItem>
            </Column>
        </ApiAndPromptsWrapper>
    );
};

const SunIcon = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
);

const MoonIcon = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>
);

const StyledPromptDialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: flex;
    flex-direction: row;
`;

const StyledPromptDialogContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
    height: calc(100% - 100px);
    background-color: #0c151d;
    border-radius: 21px;
    box-shadow: -14px 14px 20px 8px rgba(0, 0, 0, 0.49);
    border: 1px solid ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.29)` : `#61a7ab`};
    padding: 21px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media
        (min-width: 0px) and (max-width: 1250px) {
            width: calc(100% - 100px);
    }
`;

const StyledPromptDialogHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const StyledPromptDialogHeaderTitle = styled.div`
    font-size: 25px;
    font-weight: 500;
    font-family: 'Roboto Condensed', sans-serif;
`;

const StyledPromptDialogHeaderCloseButton = styled.div`
    cursor: pointer;
`;

const CloseIcon = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill={fill}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
);

const StyledCloseIcon = styled(CloseIcon)`

`;

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
    flex-direction: column;
    overflow: auto;
`;

const PromptStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const PromptHistoryTitle = styled.div`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
`;

const PromptHistoryMessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    ${({ isShown }) => !isShown ? css`
        max-height: 0;
    ` : css`
        max-height: 100%;
    `}
`;

const StyledMessageWrapper = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    border: 1px solid ${({ theme }) => theme === 'dark' ? `rgba(38, 209, 220, 0.29)` : `#61a7ab`};
    margin-bottom: 10px;
    font-size: 16px;
    padding: 15px;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 8px;
    background-color: ${({ type }) => type === 'user_prompt' ? '#101e2b' : '#133241'};
    flex-direction: column;
`;

const ToggleIcon = ({ theme, className, onClick }) => (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="12" height="12" viewBox="0 0 24 24" fill={theme === 'dark' ? 'rgba(38, 209, 220, 0.99)' : '#126065'}><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>
);

const StyledToggleButton = styled(ToggleIcon)`
    margin-right: 5px;
    cursor: pointer;

    ${({ isToggled }) => isToggled && css`
        transform: rotate(90deg);
    `}
`;

const params = new URLSearchParams(window.location.search);
const prompt = params.get('prompt');
const history = params.get('history');

const PromptDialog = ({ theme, promptHistory, setShowPromptDialog }) => {
    const [isShown, toggleIsShown] = useState(promptHistory.reduce((acc, value, index) => {
        if (prompt) {
            // if there is a prompt, calculate if we need to show it or not
            acc[index] = value.history_component === history;
        } else {
            acc[index] = true;
        }
        return acc;
    }, {}));

    return (
        <StyledPromptDialog>
            <StyledPromptDialogContainer theme={theme}>
                <StyledPromptDialogHeader>
                    <StyledPromptDialogHeaderTitle>
                        Prompt History
                    </StyledPromptDialogHeaderTitle>
                    <StyledPromptDialogHeaderCloseButton onClick={() => setShowPromptDialog({ show: false, promptHistory: null })}>
                        <CloseIcon fill={theme === 'dark' ? '#fff' : '#000'} />
                    </StyledPromptDialogHeaderCloseButton>
                </StyledPromptDialogHeader>
                <StyledContainer>
                    {promptHistory.map((prompt, index) => (
                        <PromptStyle>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <StyledToggleButton isToggled={isShown[index]} theme={theme} onClick={() => {
                                    toggleIsShown(prev => ({
                                        ...prev,
                                        [index]: !prev[index],
                                    }));
                                }} />
                                <PromptHistoryTitle onClick={() => {
                                    toggleIsShown(prev => ({
                                        ...prev,
                                        [index]: !prev[index],
                                    }));
                                }}>
                                    {prompt.name}
                                </PromptHistoryTitle>
                            </div>
                            <PromptHistoryMessagesContainer isShown={isShown[index]}>
                                {
                                    prompt.messages.map((message, _) => (
                                        <StyledMessageWrapper type={message.type} theme={theme}>
                                            <ReactMarkdown components={components} children={message.message} />
                                        </StyledMessageWrapper>
                                    ))}
                            </PromptHistoryMessagesContainer>
                        </PromptStyle>
                    ))}
                </StyledContainer>
            </StyledPromptDialogContainer>
        </StyledPromptDialog>
    );
};

const App = () => {
    const [selectedOption, setSelectedOption] = useState(window.location.href && window.location.href.indexOf("prompts") !== -1 ? 'prompts' : 'components');
    const [tooltipText, setTooltipText] = useState('Copy!');
    const [showTooltip, setShowTooltip] = useState(false);
    const [showSwitchThemeTooltip, setShowSwitchThemeTooltip] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [showPromptDialog, setShowPromptDialog] = useState({
        show: prompt === 'calendar',
        promptHistory: prompt === 'calendar' ? calendarPromptHistory : null,
    });

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const npmInstallCommand = "npm install delicious-strawberryui";

    return (
        <Wrapper theme={theme}>
            <Container theme={theme}>
                <MainContainer>
                    <LeftComponent>
                        <LogoWrapper>
                            <LogoBg theme={theme} />
                            <LogoText onClick={() => {
                                window.location.href = '/';
                            }}>Strawberry UI</LogoText>
                        </LogoWrapper>
                        <LeftContentWrapper theme={theme}>
                            <ContentSelectionList selectedOption={selectedOption} handleOptionSelect={handleOptionSelect} theme={theme} />
                            <OpenSourceWrapper>
                                <OpenSourceTitle>
                                    Open Source
                                </OpenSourceTitle>
                                <OpenSourceDescription theme={theme}>
                                    It's free and you can contribute directly!
                                </OpenSourceDescription>
                                <OpenSourceLink theme={theme} href="https://github.com/bobergsatoko/strawberry-ui">
                                    Learn More
                                </OpenSourceLink>
                            </OpenSourceWrapper>
                        </LeftContentWrapper>
                    </LeftComponent>
                    <RightComponent theme={theme}>
                        <WidgetButtonWrapper>
                            <WidgetButton theme={theme} onClick={() => {
                                navigator.clipboard.writeText(npmInstallCommand).then(() => {
                                    setTooltipText('Copied!');
                                    setTimeout(() => {
                                        setShowTooltip(false);
                                        setTooltipText('Copy!');
                                    }, 3000);
                                });
                            }} onMouseEnter={() => {
                                setShowTooltip(true);
                            }} onMouseLeave={() => {
                                if (tooltipText !== 'Copied!') {
                                    setShowTooltip(false);
                                }
                            }}>
                                <span>{npmInstallCommand}</span>
                                {tooltipText !== 'Copied!' ? <CopyToClipboardButton fill={theme === 'dark' ? `rgba(38, 209, 220, 0.99)` : `#126065`} /> : <CheckButton fill={theme === 'dark' ? `rgba(38, 209, 220, 0.99)` : `#126065`} />}
                                {showTooltip ? <Tooltip theme={theme} bottom={20} marginLeft={85}>{tooltipText}</Tooltip> : null}
                            </WidgetButton>
                            <WidgetButton theme={theme} onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                            }} onMouseEnter={() => {
                                setShowSwitchThemeTooltip(true);
                            }} onMouseLeave={() => {
                                setShowSwitchThemeTooltip(false);
                            }}>
                                {theme === 'dark' ? <SunIcon fill="rgb(69, 236, 247)" /> : <MoonIcon fill="#126065" />}
                                {showSwitchThemeTooltip ? <Tooltip bottom={20} theme={theme}>{theme === 'dark' ? 'Turn on the lights' : 'Turn off the lights'}</Tooltip> : null}
                            </WidgetButton>
                        </WidgetButtonWrapper>
                        {selectedOption === 'components' ? <ComponentList theme={theme} setShowPromptDialog={setShowPromptDialog} /> : <ApiAndPrompts theme={theme} setShowPromptDialog={setShowPromptDialog} />}
                    </RightComponent>
                </MainContainer>
            </Container>
            {showPromptDialog.show ? <PromptDialog theme={theme} setShowPromptDialog={setShowPromptDialog} promptHistory={showPromptDialog.promptHistory} /> : null}
        </Wrapper>
    );
};

export default App;
