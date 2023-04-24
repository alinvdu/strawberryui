import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #102131, #030714);
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 400px;
  height: 600px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-height: 280px;
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
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  padding: 10px;
  background: linear-gradient(to bottom, #030714, #24111D);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const SelectedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

export const SelectedValue = styled.div`
  font-size: 40px;
  color: #fff;
`;

export const StrawberryImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
  object-position: bottom;
`;

export const ListLine1 = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    height: 1px;
    background-color: white;
`;

export const ListLine2 = styled.div`
    position: absolute;
    top: 50%;
    margin-top: 20px;
    width: 100%;
    height: 1px;
    background-color: white;
`;

const TimeWidget = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);

    useEffect(() => {
        // add scroll event listeners to each list
        // to update the selected value and center it
        // when the user scrolls
        const hoursList = hoursRef.current;
        const minutesList = minutesRef.current;
        const secondsList = secondsRef.current;

        let accumulatedDeltaY = 0;
        let lastScrollTime = 0;
        const SCROLL_THRESHOLD = 100;

        // define function to update selected value
        const handleScroll = (list, setValue, e) => {
            if (e) {
                const now = Date.now();
                const timeElapsed = now - lastScrollTime;
                lastScrollTime = now;
            
                accumulatedDeltaY += e.deltaY;
            
                if (timeElapsed > 50) {
                    const scrollAmount = Math.abs(accumulatedDeltaY) <= SCROLL_THRESHOLD ? 40 : Math.abs(40 * ((accumulatedDeltaY / 100)));

                    let newScrollTop = list.scrollTop + scrollAmount * Math.sign(accumulatedDeltaY);
                    if (newScrollTop % 40 !== 0) {
                        newScrollTop = Math.round(newScrollTop / 40) * 40
                    }

                    list.scrollTop = newScrollTop;

                    updateSelectedValue(list, newScrollTop, setValue);
                    accumulatedDeltaY = 0;
                }
            }
          };

        const updateSelectedValue = (list, newScrollTop, setValue) => {
            const centerIndex = Math.round(newScrollTop / 40);
            const middleIndex = Math.floor(list.clientHeight / 40) / 2;
            const selectedIndex = Math.ceil(centerIndex + 3);

            setValue(selectedIndex);
        };

        hoursList.addEventListener(
            "wheel",
            e => handleScroll(hoursList, setHours, e),
            false
        );

        minutesList.addEventListener(
            "wheel",
            e => handleScroll(minutesList, setMinutes, e),
            false
        );

        secondsList.addEventListener(
            "wheel",
            e => handleScroll(secondsList, setSeconds, e),
            false
        );

        return () => {
            hoursList.removeEventListener("scroll", handleScroll, false);
            minutesList.removeEventListener("scroll", handleScroll, false);
            secondsList.removeEventListener("scroll", handleScroll, false);
        };
    }, []);

    return (
        <Container>
            <Title>Hours</Title>
            <Title>Minutes</Title>
            <Title>Seconds</Title>
            <ListContainer>
                <StrawberryImage src="strawberry.png" alt="strawberry" />
            </ListContainer>
            <SelectedContainer>
                <SelectedColumn>
                    <SelectedValue>{hours}</SelectedValue>
                </SelectedColumn>
                <SelectedColumn>
                    <SelectedValue>{minutes}</SelectedValue>
                </SelectedColumn>
                <SelectedColumn>
                    <SelectedValue>{seconds}</SelectedValue>
                </SelectedColumn>
            </SelectedContainer>
            <ListContainer>
                <List ref={hoursRef}>
                    {Array.from({ length: 24 }).map((_, index) => (
                        <ListItem key={index} onClick={() => setHours(index)}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                </List>
                <List ref={minutesRef}>
                    {Array.from({ length: 60 }).map((_, index) => (
                        <ListItem key={index} onClick={() => setMinutes(index)}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                </List>
                <List ref={secondsRef}>
                    {Array.from({ length: 60 }).map((_, index) => (
                        <ListItem key={index} onClick={() => setSeconds(index)}>
                            {index.toString().padStart(2, "0")}
                        </ListItem>
                    ))}
                </List>
                <ListLine1 />
                <ListLine2 />
            </ListContainer>
        </Container>
    );
};

export default TimeWidget;