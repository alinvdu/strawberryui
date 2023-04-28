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
import { useRef } from 'react';
import { useEffect } from 'react';

const Wrapper = styled.div`
    background: radial-gradient(101.13% 168.45% at 99.5% 0.53%, #2E3C44 3.12%, #253439 39.06%, #232D36 46.88%, #2D3D42 100%);
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
    position: relative; /* to position the widget button */
    height: 100%;
    background: linear-gradient(89.93deg, rgba(0, 0, 0, 0.2) 0.71%, rgba(0, 0, 0, 0) 19.33%);
    border-left: 1px solid rgba(0, 157, 167, 0.15);
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

const LogoBg = styled.div`
    margin-top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 279px;
    background-image: url('${logoBg}');

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
    font-size: 34px;
    font-weight: 300;
    color: white;
    margin-top: -15px;

    @media
        (min-width: 800px) and (max-width: 850px) {
        font-size: 26px;
    }
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
    color: white;
`;

const ContentTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin-top: 0px;

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
    font-weight: 300;
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
    font-weight: 300;

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

    @media only screen and (min-width: 0px) and (max-width: 1250px) {
        justify-content: center;
    }
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

const THREE_COLUMNS_THRESHOLD = 1213;

const renderMusicWidget = () => (
    <MusicWidget
        author="David Bowie"
        title="Space Oddity"
        album="The Rise and Fall of Ziggy Stardust and the Spider from Mars"
        onPause={() => {

        }}
        onPlay={() => {

        }}
    />
);

const renderToDoList = () => (
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
);

const renderPaginationAndTextField = () => (
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
);

const renderLoginPage = () => (
    <LoginPage
        url='localhost'
        onLogin={() => {
        }}
    />
);

const renderCalendarAndOthers = () => (
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
);

const ComponentList = () => {
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

    if (componentListRef.current && componentListRef.current.offsetWidth < THREE_COLUMNS_THRESHOLD) {
        return (
            <ComponentListWrapper ref={componentListRef}>
                <Column>
                    <ColumnItem>
                        {renderMusicWidget()}
                    </ColumnItem>
                    <ColumnItem style={{
                        marginTop: 10
                    }}>
                        {renderToDoList()}
                    </ColumnItem>
                    <ColumnItem style={{
                        marginTop: 15
                    }}>
                        {renderPaginationAndTextField()}
                    </ColumnItem>
                </Column>
                <Column>
                    <ColumnItem>
                        {renderLoginPage()}
                    </ColumnItem>
                    <ColumnItem>
                        {renderCalendarAndOthers()}
                    </ColumnItem>
                    <ColumnItem>
                        <TimeWidget />
                    </ColumnItem>
                </Column>
            </ComponentListWrapper>
        )
    }

    return (
        <ComponentListWrapper ref={componentListRef}>
            <Column>
                <ColumnItem>
                    {renderMusicWidget()}
                </ColumnItem>
                <ColumnItem>
                    {renderToDoList()}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderLoginPage()}
                </ColumnItem>
                <ColumnItem>
                    {renderCalendarAndOthers()}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    <TimeWidget />
                </ColumnItem>
                <ColumnItem>
                    {renderPaginationAndTextField()}
                </ColumnItem>
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
    font-weight: 300;
    margin-bottom: 20px;
`;

const PromptWrapper = styled.div`
    background: rgba(19, 31, 36, 1);
    width: 350px;
    padding: 20px;
    padding-bottom: 15px;
    border: 1px solid rgba(38, 209, 220, 0.29);
    border-radius: 30px;
    margin-bottom: 5px;
    box-sizing: border-box;
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
    width: 100%;
    justify-content: flex-end;
`;

const Tooltip = styled.span`
    display: none;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 100%);
    padding: 5px;
    border-radius: 5px;
    background: rgba(19, 31, 36, 1);
    border: 1px solid rgba(38, 209, 220, 0.29);
    font-size: 14px;
    white-space: nowrap;
    z-index: 9999;
    font-weight: 300;
`;

const CopyButtonWrapper = styled.div`
    position: relative;
    cursor: pointer;

    &:hover {
        ${Tooltip} {
            display: block;
        }
    }
`;

const ExpandButtonWrapper = styled.div`
    position: relative;
    cursor: pointer;

    &:hover {
        ${Tooltip} {
            display: block;
        }
    }
`;

const CopyToClipboardButton = ({ onClick }) => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{
        marginTop: 5
    }} onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="rgba(38, 209, 220, 0.99)"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
);

const ExpandButton = ({ onClick }) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
        marginTop: 5,
        marginRight: 10
    }} fill="rgba(38, 209, 220, 0.99)"><path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></path></svg>
);

const CollapseButton = ({ onClick }) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
        marginTop: 5,
        marginRight: 10
    }} fill="rgba(38, 209, 220, 0.99)"><path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"></path></svg>
);

const Ellipsis = styled.span`
    letter-spacing: 2px;
    opacity: 0.8;
`;

const Prompt = ({ description, title }) => {
    const [tooltipText, setTooltipText] = useState('Copy to clipboard');
    const [expandButtonTooltipText, setExpandButtonToolTipText] = useState('Show all text');
    const [showExpandedButton, setShowExpandedButton] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current) {
            if (descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight) {
                setShowExpandedButton(true);
            }
        }
    }, []);

    return (
        <PromptWrapper>
            {title ? <PromptInsideTitle>{title}</PromptInsideTitle> : null}
            <PromptDescription isExpanded={isExpanded} ref={descriptionRef}>{description}</PromptDescription>
            {!isExpanded && showExpandedButton ? <Ellipsis>...</Ellipsis> : null}
            <ButtonsWrapper>
                {showExpandedButton ?
                    <ExpandButtonWrapper>
                        {!isExpanded ?
                            <ExpandButton onClick={() => {
                                setExpanded(true);
                                setExpandButtonToolTipText('Show less');
                            }} /> :
                            <CollapseButton onClick={() => {
                                setExpanded(false);
                                setExpandButtonToolTipText('Show all text');
                            }} />}
                        <Tooltip>{expandButtonTooltipText}</Tooltip>
                    </ExpandButtonWrapper> : null}
                <CopyButtonWrapper onMouseLeave={() => {
                    setTooltipText('Copy to clipboard');
                }}>
                    <CopyToClipboardButton onClick={() => {
                        let toCopyDescription = description;
                        if (typeof description === 'object') {
                            toCopyDescription = descriptionRef.current.textContent
                        }
                        navigator.clipboard.writeText(toCopyDescription).then(() => {
                            setTooltipText('Copied!')
                        });
                    }} />
                    <Tooltip>{tooltipText}</Tooltip>
                </CopyButtonWrapper>
            </ButtonsWrapper>
        </PromptWrapper>
    );
};

const PromptWidgetWrapper = styled.div`
`;

const WidgetWrapper = styled.div`
    margin-bottom: 8px;
`;

const ApiAndPrompts = () => {
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

    const renderProjectSetup = () => (
        <>
            <PromptTitle>
                Project Setup
            </PromptTitle>
            <Prompt title="ChatGPT" description="We are using storybook, styled-components and create react app." />
            <Prompt title="ChatGPT" description="The widgets are modern with black blue background, it uses the following colors: #102131 - gradient color for background, #030714 -gradient color for background, #24111D - stroke color. Border-radius of 30px." />
        </>
    );

    const renderMusicWidgetPrompt = () => (
        <PromptWidgetWrapper>
            <PromptTitle>
                Music Widget
            </PromptTitle>
            <WidgetWrapper>
                {renderMusicWidget()}
            </WidgetWrapper>
            <Prompt title="ChatGPT" description={
                <div>Create a React component for a music widget, the component accepts an object interface (or prop-type) and the object has the following fields: title, author, album. It also receives four functions that will be called inside the component on the following three buttons: Pause, Play, Next Song, Previous Song.<br /><br />The dimensions of the widget are the following: 350px wide, 400px height. It's composed of two parts: the top part has the author name on top and the title of the song and album on the bottom and it has 328px height. The top part also has a background-image of a strawberry. <br /><br />The bottom part contains the buttons aligned in the center, on the left we have previous song icon, on the middle we have pause/play song and on the right we have next song icon.<br /><br />Let's add an internal state to the component with the initial value of playing = true. Then if playing is true we show the pause button, if playing is false we show the play button. If the user clicks play we change the state and the same with pause. At the same time, the component receive another prop function called onStateChange that will be called with true if the state changes to true and false otherwise.<br /><br /> Let's remove the onStateChange prop and just stick with onPlay and onPause</div>} />
            <Prompt title="MidJourney" description="mui-music-widget.png strawberry-widget.png strawberry ui widget for listening to music, play button, change song, name of the artist, description, minimalist design, black and blue background, strawberry, clean, high resolution, 4k" />
        </PromptWidgetWrapper>
    );

    const renderLoginpagePrompt = () => (
        <>
            <PromptTitle>
                Login Page
            </PromptTitle>
            <Prompt title="ChatGPT" description={<div>Create a React component for Login the user. It should receive a login url and a function that will be called upon login completion.<br /><br /> The wrapper should be 450px wide by 374px height, with a border-radius of 45px. It should also have a container with a border-radius of 45px that also uses a background image with a strawberry.<br /><br />The header part contains a decorated image with a strawberry and the Login text.<br />The main part contains a form with 3 rows:<br />- The first row contains an user icon and the username textfield.<br />- The second row contains the password icon and the password textfield.<br />- The third row contains the login button.<br /><br />And the end of the component we have a row with Forgot Password question.</div>} />
            <Prompt title="MidJourney" description="mui-design.png generic-strawberry.png strawberry ui widget for user input, text form, rounded outlined web input, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    const renderCalendarPrompt = () => (
        <>
            <PromptTitle>
                Calendar
            </PromptTitle>
            <WidgetWrapper>
                <Calendar />
            </WidgetWrapper>
            <Prompt title="ChatGPT" description="Create a widget component for a Calendar. It can receive a selected date, a function that will be called when the date will change. It should have a header part and main content part. The header part should have two elements that are spaced around the margins. The left element should hold the date and the year and the right element..." />
            <Prompt title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for calendar in the web browser, flat surface, date picker, days of the month, month, minimalist design, black and blue background, strawberry, clean, high resolution" />

        </>
    );

    const renderPaginationPrompt = () => (
        <>
            <PromptTitle>
                Pagination
            </PromptTitle>
            <WidgetWrapper>
                <Pagination
                    totalElements={100}
                    elementsPerPage={10}
                    onPageChange={() => { }}
                />
            </WidgetWrapper>
            <Prompt title="ChatGPT" description={<div>
                Create a React component for pagination. It should receive the total number of elements and how many elements are for each page as prop. It should also receive a callback function for when the page is being changed, which will be called with the page index. It should keep an internal state of it's current page.<br /><br />The component has three parts, the left container which contains the left arrow icon, the middle container which holds the pages number and the right container which contains the right icon.<br /><br />The middle container can hold up to 5 numbers, if the total number of pages are more than 5 than we can show the first page, the last page and 3 pages that are near the current page. Everything in between will be marked by dots.
            </div>} />
            <Prompt title="MidJourney" description="mui-pagination.png strawberry-generic-widget.png strawberry ui widget for pagination flat in web browser, next page, prev page icons, number of entities, minimalist design, black and blue background, strawberry, clean, high resolution" />

        </>
    );

    const renderSliderPrompt = () => (
        <>
            <PromptTitle>
                Slider
            </PromptTitle>
            <Prompt title="ChatGPT" description={<div>Let's create a React component for a Slider. It has the width of 66px and height of 195px & border-radius of 25px. It has a wrapper and inside the wrapper it has a container composed of 3 elements:<br />- The slider button, which is a round button that can be moved on the slider line.<br />- The slider line which is 150px height.<br />- A decorated strawberry at the base of the slider line.</div>} />
            <Prompt title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for slider component, slider with button, line, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    const renderTimeWidgetPrompt = () => (
        <>
            <PromptTitle>
                Time Widget
            </PromptTitle>
            <WidgetWrapper>
                <TimeWidget />
            </WidgetWrapper>
            <Prompt title="ChatGPT" description={<div>
                Lets implement a Time Widget component in React that will give the user the ability to select Hours, Minutes and Seconds.<br /><br />On top part of the widget we three columns, each of them denoting title for the list that are beneath them in which you can actually scroll and select the values.<br /><br />The first column is Hours, second is Minutes and third is Seconds.<br /><br />Beneath this three title columns there is a wide space with a decorating image of strawberries, that has full width.<br /><br />Beneath the strawberry image, we find the selected content container, it has three columns showing the user the currently selected values for each column (hours, minutes, seconds). If there is no selected value, then we show a blue line. The selected content container, has a background gradient and is delimited by shadow and border.<br /><br />Next we have three columns which contain lists for the user to pick the values that populate each column (hours, minutes, seconds). The lists are scrollable, and the center elements are the one being picked. The center elements are highlighted by two bars denoting the currently selected element. The user can also click on any value in order for the selection to jump at that specific value. For instance if the minute 13 is centered in the list, then it will be selected, if the minute 16 is not centered but the user clicks on it, the component will move it to the center and select it.<br /><br />Requirement: the scroll should be able to move just by 1 value when scrolling softly butmove faster when scrolling rapidly.
            </div>} />
            <Prompt title="MidJourney" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for choosing time, text input, time component, am/pm, clock icon, dropdown list, scroll, minimalist design, black blue background, clean, high resolution" />

        </>
    );

    const renderToDoListPrompt = () => (
        <>
            <PromptTitle>
                To Do List
            </PromptTitle>
            <WidgetWrapper>
                {renderToDoList()}
            </WidgetWrapper>
            <Prompt title="ChatGPT" description={<div>Create a React component named ToDoList. As props it can receive a few pre-defined items, that can have the following fields: description as a string, done as a boolean. The component itself is 350px wide and 535px long. It is composed of the following elements:<br /><br />Wrapper component with a linear gradient. Container component with a linear gradient and a background picture mixed. At top it will have a decorating strawberry component image, positioned absolute relative to the container.<br /><br /> In the middle it will render the list of todos with a background and a small padding. It will also have a checkbox in front denoting if the todo is checked or not. A TextField beneath the rendered todos where the user can input the next item.<br /><br />Two buttons placed:<br />1. At the bottom in the center, add button, it has a wrapper with a border and then the button itself.<br />2. Near the first button but on right top of it. It's just a button with and X.<br /><br />The component should be able to add new items using the TextField and the Add Button, the new item should appear in the list. The rendered list should have a height of 190px and the rest should be scrollable.</div>} />
            <Prompt title="Design" description="mui-design.png strawberry-generic-widget.png strawberry ui widget for user input, text form, rounded outlined web input, minimalist design, black blue background, clean, high resolution" />
        </>
    );

    if (componentListRef.current && componentListRef.current.offsetWidth < THREE_COLUMNS_THRESHOLD) {
        return (
            <ApiAndPromptsWrapper ref={componentListRef}>
                <Column>
                <ColumnItem>
                    {renderProjectSetup()}
                </ColumnItem>
                <ColumnItem>
                    {renderMusicWidgetPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderLoginpagePrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderTimeWidgetPrompt()}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderCalendarPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderPaginationPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderSliderPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderToDoListPrompt()}
                </ColumnItem>
            </Column>
            </ApiAndPromptsWrapper>
        );
    }

    return (
        <ApiAndPromptsWrapper ref={componentListRef}>
            <Column>
                <ColumnItem>
                    {renderProjectSetup()}
                </ColumnItem>
                <ColumnItem>
                    {renderMusicWidgetPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderLoginpagePrompt()}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderCalendarPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderPaginationPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderSliderPrompt()}
                </ColumnItem>
            </Column>
            <Column>
                <ColumnItem>
                    {renderTimeWidgetPrompt()}
                </ColumnItem>
                <ColumnItem>
                    {renderToDoListPrompt()}
                </ColumnItem>
            </Column>
        </ApiAndPromptsWrapper>
    );
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
