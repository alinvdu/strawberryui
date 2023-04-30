import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../text-field/TextField';
import PrimaryButton, { SIZER_VARIANTS, VARIANTS } from '../buttons/PrimaryButton';
import addIconSrc from "./AddIcon.png";
import strawberryDec from "./strawberry_decoration.png";
import toDoListBackground from "./toDoListBg.jpg";
import toDoListBackgroundWhite from "./strawberry-bg-white.jpg";

const Wrapper = styled.div`
    position: relative;
    width: 350px;
    height: 535px;
    box-sizing: border-box;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WrapperBackground = styled.div`
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    height: 100%;
    border-radius: 110px;
    background: ${({ theme }) => theme === 'dark' ?
        `linear-gradient(180deg, #124562 0%, #0B2437 15.71%, #061F2E 89.74%, #011020 100%),
        linear-gradient(180deg, #33839A 0%, rgba(24, 47, 54, 0.765267) 36.22%, rgba(18, 58, 69, 0.62) 74.36%, rgba(0, 0, 0, 0) 100%)` :
        `linear-gradient(180deg, #E9F6FC 0%, #A3C6D8 15.71%, #A3C7D9 89.74%, #A3C7D9 100%)`};
    z-index: 2;
`;

const WrapperBorder = styled.div`
    position: absolute;
    border-radius: 110px;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #33839A 0%, rgba(24, 47, 54, 0.765267) 36.22%, rgba(18, 58, 69, 0.62) 74.36%, rgba(0, 0, 0, 0) 100%)` :
        `linear-gradient(180deg, #ABE9FB 0%, rgba(121, 181, 198, 0.765267) 36.22%, rgba(109, 174, 193, 0.62) 74.36%, rgba(90, 188, 216, 0) 100%)`};
    z-index: 1;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    position: relative;

    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(181deg,rgba(17,51,75,1) 0%,rgba(7,27,50,1) 30.04%,rgba(0,11,23,0.75) 57.04%,rgba(1,16,32,0) 89.5%), url('${toDoListBackground}')` :
        `linear-gradient(180deg, rgba(212, 235, 244, 0.75) 0%, rgba(168, 202, 219, 0.75) 51.04%, rgba(167, 201, 219, 0.5025) 87.5%), url('${toDoListBackgroundWhite}')`};
    border-radius: 110px;
`;

const Strawberry = styled.img`
    margin-top: -30px;
    ${({ theme }) => theme !== 'dark' ? `opacity: 0.65;` : ``}
`;

const TodoListWrapper = styled.div`
    height: 200px;
    overflow-y: auto;
    padding: 10px;
    margin-top: -50px;

    ::-webkit-scrollbar {
        width: 5px;
        height: 100%;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme === 'dark' ? `rgba(6, 28, 46, 1)` : `rgba(160, 191, 203, 0.75)`};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme === 'dark' ? `rgba(25, 66, 102, 1)` : `rgba(212, 235, 244, 0.75)`};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(150, 215, 241, 0.75);
    }
`;

const TodoListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ index, theme }) =>
    theme === 'dark' ? `rgba(${Math.max(6 - index * 2, 0)}, ${Math.max(25 - index * 5, 0)}, ${Math.max(
      41 - index * 7,
      0
    )}, 1)` : `rgba(${Math.max(189 - index * 2, 0)}, ${Math.max(219 - index * 7, 0)}, ${Math.max(228 - index * 14, 0)}, 1)`};
  width: 269px;
  height: 45px;
  margin-bottom: 5px;
  padding: 8px;
  box-sizing: border-box;
  color: ${({ theme }) => theme === 'dark' ? 'white' : '#126065'};
  font-weight: ${({ theme }) => theme === 'dark' ? 300 : 400};
  font-size: 15px;
  border-radius: 5px;
`;

const TodoListItemText = styled.div`
  margin-left: 10px;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  opacity: 0.85;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(175, 0, 0, 1);
  font-weight: bold;
  text-shadow: 0 0 4px rgba(175, 0, 0, 1);
  cursor: pointer;
`;

const StyledAddButton = styled.img`
    margin-left: -2px;
`;

const StyledContentWrapper = styled.div`
    flex: 1;
    display: flex;
`;

const StyledTextFieldWrapper = styled.div`
    margin-top: 5px;
    width: 269px;
`;

const StyledButtonsWrapper = styled.div`
    display: flex;
`;

const StyledAddButtonWrapper = styled.div`
    position: absolute;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 95px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddBorderShapedBackground = styled.div`
    position: absolute;
    width: 95px;
    height: 95px;
    background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180deg, #041927 0%, #011C2E 100%)` : `linear-gradient(180deg, #AEE2EE 0%, #82BAD1 100%);`};
    border-radius: 95px;
`;

const AddBackground = styled.div`
    position: absolute;
    left: 6px;
    top: 6px;
    width: 83px;
    height: 83px;
    border-radius: 83px;
    background: ${({ theme }) => theme === 'dark' ? `radial-gradient(89.16% 89.16% at 50% 50.6%, #00080F 0%, #021621 100%)` : `radial-gradient(89.16% 89.16% at 50% 50.6%, #A2DDFF 0%, #477A97 100%);`};
`;

const StyledCloseButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    margin-left: 55px;
    bottom: 40px;
`;

const StyledCheckboxWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    padding: 1px;
    box-sizing: border-box;
`;

const StyledCheckboxWrapperBorder = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(38, 209, 220, 0.99) 0%, rgba(38, 209, 220, 0) 100%);
`;

const StyledCheckbox = styled.input`
    position: relative;
    appearance: none; /* remove default checkbox styling */
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme === 'dark' ? `rgba(7, 32, 53, 1)` : `rgba(196, 219, 224, 1)`};
    width: 18px;
    height: 18px;
    margin: 0px;
    border-radius: 18px;
    cursor: pointer;

    &:checked::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='12' viewBox='0 0 15 12' fill='none'><path d='M1.5 6L5.5 10L14 1.5' stroke='%2326CCD7' stroke-opacity='0.75' stroke-width='2'/></svg>");
        color: #fff;
        position: absolute;
        top: 50%;
        margin-top: 2px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const TodoList = ({ items, theme = 'dark' }) => {
    const [todos, setTodos] = useState(items || []);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { description: newTodo, done: false }]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleCheckTodo = (index) => {
        setTodos(
            todos.map((todo, i) => {
                if (i === index) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            })
        );
    };

    return (
        <Wrapper>
            <WrapperBorder theme={theme} />
            <WrapperBackground theme={theme}>
                <Container theme={theme}>
                    <Strawberry theme={theme} src={strawberryDec} alt="strawberry" />
                    <TodoListWrapper theme={theme}>
                        {todos.map((todo, index) => (
                            <TodoListItem theme={theme} key={index} index={index}>
                                <StyledContentWrapper>
                                    <StyledCheckboxWrapper>
                                        <StyledCheckboxWrapperBorder theme={theme} />
                                        <StyledCheckbox theme={theme} type="checkbox" checked={todo.done} onChange={() => handleCheckTodo(index)} />
                                    </StyledCheckboxWrapper>
                                    <TodoListItemText done={todo.done}>{todo.description}</TodoListItemText>
                                </StyledContentWrapper>
                                <DeleteButton theme={theme} onClick={() => handleDeleteTodo(index)}>X</DeleteButton>
                            </TodoListItem>
                        ))}
                    </TodoListWrapper>
                    <StyledTextFieldWrapper>
                        <TextField
                            onChange={(value) => setNewTodo(value)}
                            placeholder="Enter a new todo"
                            controlledValue={newTodo}
                            theme={theme}
                        />
                    </StyledTextFieldWrapper>
                    <StyledButtonsWrapper>
                        <StyledAddButtonWrapper>
                            <AddBorderShapedBackground theme={theme} />
                            <AddBackground theme={theme} />
                            <PrimaryButton
                                onClick={handleAddTodo}
                                sizeVariant={SIZER_VARIANTS.SMALL}
                                icon={<StyledAddButton src={addIconSrc} />}
                                variant={VARIANTS.BLUE}
                                theme={theme}
                            />
                        </StyledAddButtonWrapper>
                        <StyledCloseButtonWrapper>
                            <PrimaryButton
                                onClick={() => {
                                    setNewTodo('');
                                }}
                                sizeVariant={SIZER_VARIANTS.SMALL}
                                icon={<DeleteButton>X</DeleteButton>}
                                variant={VARIANTS.BLUE}
                                theme={theme}
                            />
                        </StyledCloseButtonWrapper>
                    </StyledButtonsWrapper>
                </Container>
            </WrapperBackground>
        </Wrapper>
    );
};

export default TodoList;
