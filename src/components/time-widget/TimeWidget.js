import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import strawberryBg from "./strawberry-bg.jpg";
import strawberryBgWhite from "./strawberry-bg-white.jpg";
import strawberryDec from "./strawberries.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(179.71deg, #1D4264 0.3%, rgba(15, 33, 54, 0.95) 42.79%, rgba(6, 21, 44, 0.57) 83.21%, rgba(6, 13, 35, 0) 99.79%), url('${strawberryBg}')` :
        `linear-gradient(179.71deg, #B8DAE1 0.3%, rgba(153, 184, 207, 0.95) 34.76%, rgba(241, 244, 249, 0.62) 72.92%, rgba(226, 232, 252, 0.33) 99.79%), url('${strawberryBgWhite}')`};
    border-radius: 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    padding: 0 20px 20px 20px;
    width: 350px;
    height: 540px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme === 'dark' ? `#10547A` : `#6AA3B5`};
    border-radius: 35px;

`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 319px;
    min-height: 43px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(218.12deg, #193855 9.5%, #11202C 78.02%)`:
        `linear-gradient(218.12deg, #BAE5FA 9.5%, #99BBCC 78.02%);`};
    border: 1px solid ${({ theme }) => theme === 'dark' ? `#215A6C` : `#88B9D3`};
    border-radius: 15px;
    margin-top: -1px;
    padding: 0 25px;

    color: ${({ theme }) => theme === 'dark' ? `#fff` : `#126065`};
    font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
`;

export const Title = styled.div`
  font-size: 15px;
  opacity: 0.65;
`;

export const ListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-height: 280px;

    color: ${({ theme }) => theme == 'dark' ? `#fff` : `#126065`};
    font-weight: ${({ theme }) => theme == 'dark' ? 300 : 400};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 33%;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const EmptyItem = styled.li`
    height: 40px;
`;

export const SelectedContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #0C1B33 0%, #0A1A2E 100%)`
        : `linear-gradient(0deg, #6A9CB1, #6A9CB1),linear-gradient(180deg, #AAC9DC 0%, #89ACC0 100%)`};
    border: 1px solid ${({ theme }) => theme === 'dark' ? `#112845` : `rgba(106, 156, 177, 1)`};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.34);
    border-radius: 8px;
    margin-top: -7px;
`;

export const SelectedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

export const SelectedValue = styled.div`
    font-size: 23px;
    color: ${({ theme }) => theme === 'dark' ? `rgba(110, 190, 219, 1)` : `#126065`};
    text-shadow: 0px 0px 4px #00ECFB;
`;

export const StrawberryImage = styled.img`
    margin-top: 33px;
    width: 270px;
`;

export const ListLine1 = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme === 'dark' ? `#00ECFB` : `#126065`};
    box-shadow: 0px 0px 4px #00ECFB;
    opacity: 0.85;
`;

export const ListLine2 = styled.div`
    position: absolute;
    top: 50%;
    margin-top: 20px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme === 'dark' ? `#00ECFB` : `#126065`};
    box-shadow: 0px 0px 4px #00ECFB;
    opacity: 0.85;
`;

const TimeWidget = ({ theme = 'dark' }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();

        setHours(currentHour);
        setMinutes(currentMinute);
        setSeconds(currentSecond);


        // add scroll event listeners to each list
        // to update the selected value and center it
        // when the user scrolls
        const hoursList = hoursRef.current;
        const minutesList = minutesRef.current;
        const secondsList = secondsRef.current;

        hoursList.scrollTop = currentHour * 40;
        minutesList.scrollTop = currentMinute * 40;
        secondsList.scrollTop = currentSecond * 40;

        let accumulatedDeltaY = 0;
        let lastScrollTime = 0;
        const SCROLL_THRESHOLD = 100;

        // define function to update selected value
        const handleScroll = (list, setValue, e, nrOfElems) => {
            if (e) {
                e.preventDefault();
                const now = Date.now();
                const timeElapsed = now - lastScrollTime;
                lastScrollTime = now;
            
                accumulatedDeltaY += e.deltaY;
            
                if (timeElapsed > 42) {
                    const scrollAmount = Math.abs(accumulatedDeltaY) <= SCROLL_THRESHOLD ? 40 : Math.abs(40 * ((accumulatedDeltaY / 100)));

                    let newScrollTop = list.scrollTop + scrollAmount * Math.sign(accumulatedDeltaY);
                    if (newScrollTop % 40 !== 0) {
                        newScrollTop = Math.round(newScrollTop / 40) * 40
                    }

                    if (newScrollTop < 0) {
                        newScrollTop = 0;
                    }

                    if ( newScrollTop > (nrOfElems - 1) * 40) {
                        newScrollTop = (nrOfElems - 1) * 40;
                    }

                    list.scrollTop = newScrollTop;

                    updateSelectedValue(list, newScrollTop, setValue, nrOfElems);
                    accumulatedDeltaY = 0;
                }
            }
          };

        const updateSelectedValue = (list, newScrollTop, setValue, nrOfElems) => {
            if (newScrollTop >= 0 && newScrollTop <= (nrOfElems - 1) * 40) {
                const centerIndex = Math.round(newScrollTop / 40);
                const selectedIndex = Math.ceil(centerIndex);

                setValue(selectedIndex);
            }
        };

        hoursList.addEventListener(
            "wheel",
            e => handleScroll(hoursList, setHours, e, 24),
            false
        );

        minutesList.addEventListener(
            "wheel",
            e => handleScroll(minutesList, setMinutes, e, 60),
            false
        );

        secondsList.addEventListener(
            "wheel",
            e => handleScroll(secondsList, setSeconds, e, 60),
            false
        );

        return () => {
            hoursList.removeEventListener("scroll", handleScroll, false);
            minutesList.removeEventListener("scroll", handleScroll, false);
            secondsList.removeEventListener("scroll", handleScroll, false);
        };
    }, []);

    return (
        <Container theme={theme}>
            <TitleContainer theme={theme}>
                <Title>Hours</Title>
                <Title>Minutes</Title>
                <Title>Seconds</Title>
            </TitleContainer>
            <ListContainer>
                <StrawberryImage src={strawberryDec} alt="strawberry" />
            </ListContainer>
            <SelectedContainer theme={theme}>
                <SelectedColumn>
                    <SelectedValue theme={theme}>{hours}</SelectedValue>
                </SelectedColumn>
                <SelectedColumn>
                    <SelectedValue theme={theme}>{minutes}</SelectedValue>
                </SelectedColumn>
                <SelectedColumn>
                    <SelectedValue theme={theme}>{seconds}</SelectedValue>
                </SelectedColumn>
            </SelectedContainer>
            <ListContainer theme={theme}>
                <List ref={hoursRef}>
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                    {Array.from({ length: 24 }).map((_, index) => (
                        <ListItem key={index} onClick={() => {
                            hoursRef.current.scrollTop = index * 40;
                            setHours(index)
                        }}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                </List>
                <List ref={minutesRef}>
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                    {Array.from({ length: 60 }).map((_, index) => (
                        <ListItem key={index} onClick={() => {
                            minutesRef.current.scrollTop = index * 40;
                            setMinutes(index)
                        }}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                </List>
                <List ref={secondsRef}>
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                    {Array.from({ length: 60 }).map((_, index) => (
                        <ListItem key={index} onClick={() => {
                            secondsRef.current.scrollTop = index * 40;
                            setSeconds(index)
                        }}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                    {Array.from({ length: 3 }).map((_, index) => <EmptyItem key={index} />)}
                </List>
                <ListLine1 theme={theme} />
                <ListLine2 theme={theme} />
            </ListContainer>
        </Container>
    );
};

export default TimeWidget;