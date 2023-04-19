import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/**
 * CSS part
 */
const WidgetContainer = styled.div`
  background: linear-gradient(to bottom, #102131, #030714),
              url(strawberry-image.jpg) no-repeat center center fixed;
  border-radius: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const MonthYear = styled.div`
  font-size: 24px;
`;

const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: white;
`;

const DayOfMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: white;
`;

const StyledWeekContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Calendar = ({ selectedDate, onDateChange }) => {
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
            onDateChange(prevMonthDate);
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
            <Header>
                <MonthYear>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</MonthYear>
                <div>
                    <ArrowButton onClick={handlePrevMonth}>{"<"}</ArrowButton>
                    <ArrowButton onClick={handleNextMonth}>{">"}</ArrowButton>
                </div>
            </Header>
            <DaysOfWeek>
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </DaysOfWeek>
            {weeksOfMonth.map((week, i) => (
                <StyledWeekContainer key={i}>
                    {week.map((day) => (
                        <DayOfMonth
                            key={day ? day.getDate() : Math.random()}
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
        </WidgetContainer>
    );
};

export default Calendar;
