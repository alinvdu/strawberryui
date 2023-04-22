import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../text-field/TextField';
import PrimaryButton, { SIZER_VARIANTS, VARIANTS } from '../buttons/PrimaryButton';
import addIconSrc from "./AddIcon.png";
import strawberryDec from "./strawberry_decoration.png";
import toDoListBackground from "./toDoListBg.jpg";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    background: linear-gradient(to bottom, #102131, #030714);
    width: 350px;
    height: 535px;
    background:
    linear-gradient(180deg, #124562 0%, #0B2437 15.71%, #061F2E 89.74%, #011020 100%),
    linear-gradient(180deg, #33839A 0%, rgba(24, 47, 54, 0.765267) 36.22%, rgba(18, 58, 69, 0.62) 74.36%, rgba(0, 0, 0, 0) 100%);

    margin: 1px;
    border-radius: 110px;
    box-sizing: border-box;
    padding: 8px;

    &::after {
        border-radius: 110px;
        background: linear-gradient(180deg, #33839A 0%, rgba(24, 47, 54, 0.765267) 36.22%, rgba(18, 58, 69, 0.62) 74.36%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
        content: '';
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        z-index: -1;
    };
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    position: relative;

    background: linear-gradient(181deg,rgba(17,51,75,1) 0%,rgba(7,27,50,1) 30.04%,rgba(0,11,23,0.75) 57.04%,rgba(1,16,32,0) 89.5%), url('${toDoListBackground}');
    border-radius: 110px;
`;

const Strawberry = styled.img`
    margin-top: -30px;
`;

const TodoListWrapper = styled.div`
  height: 190px;
  overflow-y: scroll;
  padding: 10px;
`;

const TodoListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoListItemText = styled.div`
  margin-left: 10px;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #24111d;
  font-weight: bold;
`;

const StyledAddButton = styled.img`
    margin-left: -2px;
`;

const TodoList = ({ items }) => {
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
            <Container>
                <Strawberry src={strawberryDec} alt="strawberry" />
                <TodoListWrapper>
                    {todos.map((todo, index) => (
                        <TodoListItem key={index}>
                            <input type="checkbox" checked={todo.done} onChange={() => handleCheckTodo(index)} />
                            <TodoListItemText done={todo.done}>{todo.description}</TodoListItemText>
                            <DeleteButton onClick={() => handleDeleteTodo(index)}>X</DeleteButton>
                        </TodoListItem>
                    ))}
                </TodoListWrapper>
                <TextField
                    value={newTodo}
                    onChange={(value) => setNewTodo(value)}
                    placeholder="Enter a new todo"
                    controlledValue={newTodo}
                />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <PrimaryButton
                        onClick={handleAddTodo}
                        sizeVariant={SIZER_VARIANTS.SMALL}
                        icon={<StyledAddButton src={addIconSrc} />}
                        variant={VARIANTS.BLUE}
                    />
                </div>
            </Container>
        </Wrapper>
    );
};

export default TodoList;
