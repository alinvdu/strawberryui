import React, { useState } from 'react';
import styled from 'styled-components';
import decoratedWonkyStrawberryBg from './wonky-strawberry.png';
import SecondaryButton from '../buttons/SecondaryButton';
import { ArrowLeft, ArrowRight } from '../buttons/SecondaryButtonUtils';


/**
 * CSS part
 */
const WidgetContainer = styled.div`
    position: relative;
    background:
        linear-gradient(221.07deg, #206D8E 5.96%, #0E405C 17.32%, #092F4A 27.37%, #04283C 36.3%, #012336 47.7%, #022539 56.93%, #052E44 74.64%, #0F414B 83.98%, #257091 95.67%);
    border: 1px solid rgba(47, 122, 122, 1);
    border-radius: 30px;
    width: 350px;
    height: 380px;
    padding: 35px 35px 5px 25px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    &::after {
        position: absolute;
        content: '';
        top: -1px;
        left: 0;
        right: 0;
        bottom: 0;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        background: linear-gradient(176.26deg, rgba(47, 141, 170, 0.5) 8.15%, rgba(11, 40, 66, 0) 29.44%);
    }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  color: white;
  z-index: 2;
  align-items: center;
`;

const MonthYear = styled.div`
  font-size: 21px;
  font-weight: 300;
  margin-left: 5px;
`;

const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  font-weight: 300;
  z-index: 2;
`;

const DayOfMonth = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    font-weight: 300;
    width: 26px;
    margin: 2px 0;
    color: white;
    z-index: 2;
    cursor: pointer;

    ${({ active }) => active ? `
        border: 1px solid rgba(255, 255, 255, 0.75);
        border-radius: 50%;
    ` : 'border: 1px solid transparent;'};
`;

const StyledWeekContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DecoratingLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(72, 130, 148, 1);
    margin: 20px 0;
`;

const StyledDaysOfWeek = styled.div`
    width: 26px;
    text-align: center;
`;

const DecoratedWonkyStrawberryBg = styled.img`
    position: absolute;
    top: -1px;
    left: 50%;
    margin-left: -80px;
    opacity: 0.75;
    z-index: 1;
`;

const StyledButtonsWrapper = styled.div`
    display: flex;
`;

const Calendar = ({ selectedDate, onDateChange = () => {} }) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

    const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => {
            const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            console.log(prevMonthDate.getMonth());
            return prevMonthDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate((prevDate) => {
            const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            onDateChange(nextMonthDate);
            return nextMonthDate;
        });
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

    const daysOfMonth = [];

    for (let i = 1; i <= daysInMonth; i++) {
        daysOfMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }

    const emptyDays = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        emptyDays.push(i);
    }

    const weeksOfMonth = [];

    let currentWeek = [];

    emptyDays.forEach(() => {
        currentWeek.push(null);
    });

    daysOfMonth.forEach((day) => {
        currentWeek.push(day);

        if (currentWeek.length === 7) {
            weeksOfMonth.push(currentWeek);
            currentWeek = [];
        }
    });

    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
            currentWeek.push(null);
        }

        weeksOfMonth.push(currentWeek);
    }

    return (
        <WidgetContainer>
            <DecoratedWonkyStrawberryBg src={decoratedWonkyStrawberryBg} />
            <Header>
                <MonthYear>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</MonthYear>
                <StyledButtonsWrapper>
                    <SecondaryButton icon={<ArrowLeft />} onClick={handlePrevMonth} />
                    <div style={{
                        marginLeft: 8
                    }}>
                        <SecondaryButton icon={<ArrowRight />} onClick={handleNextMonth} />
                    </div>
                </StyledButtonsWrapper>
            </Header>
            <DaysOfWeek>
                {daysOfWeek.map((day) => (
                    <StyledDaysOfWeek key={day}>{day}</StyledDaysOfWeek>
                ))}
            </DaysOfWeek>
            {weeksOfMonth.map((week, i) => (
                <StyledWeekContainer key={i}>
                    {week.map((day) => (
                        <DayOfMonth
                            key={day ? day.getDate() : Math.random()}
                            active={day && day.getDate() === currentDate.getDate()}
                            onClick={() => {
                                if (day) {
                                    setCurrentDate(day);
                                    onDateChange(day);
                                }
                            }}
                            style={{ opacity: day ? 1 : 0.4, pointerEvents: day ? "auto" : "none" }}
                        >
                            {day ? day.getDate() : ""}
                        </DayOfMonth>
                    ))}
                </StyledWeekContainer>
            ))}
            <DecoratingLine />
        </WidgetContainer>
    );
};

export default Calendar;
