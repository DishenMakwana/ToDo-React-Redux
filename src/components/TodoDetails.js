import React, { useState } from 'react';
import { updateTodos, removeTodos, checkTodos } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './TodoDetails.css';

function TodoDetails({ todo }) {
    const dispatch = useDispatch();
    const id = todo.id;

    const [todoText, setTodoText] = useState(todo.name);
    const [editing, setEditing] = useState(false);

    const removeTodoHandler = (id) => {
        dispatch(removeTodos(id));
    };

    const checkTodoHandler = (id) => {
        dispatch(checkTodos(id));
    };

    const saveEditTodoHandler = () => {
        if (todoText.trim() === '') {
            alert('Please enter a valid todo');
            setTodoText(todo.name);
        } else {
            dispatch(updateTodos({ id, todo: todoText }));
        }
        setEditing(false);
    };

    const onEnterPressHandler = (e) => {
        if (e.which === 13) {
            saveEditTodoHandler();
            setEditing(false);
            return;
        }
    };

    const todo_completed = todo.completed ? 'todo-item_completed' : '';
    const todo_editing = editing ? 'todo-item_editing' : '';
    const hide = editing ? 'hide' : '';

    return (
        <div className={`todo_item ${todo_completed} ${todo_editing}`}>
            <div className='cell'>
                <button
                    className={`icon checkIcon ${hide}`}
                    onClick={() => checkTodoHandler(todo.id)}>
                    <i className='far fa-check-circle'></i>
                </button>
            </div>
            <div className='cell'>
                {!editing && <div className='title'>{todoText}</div>}
                {editing && (
                    <input
                        className='input'
                        type='text'
                        value={todoText}
                        onKeyPress={onEnterPressHandler}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                )}
            </div>
            <div className='cell'>
                <button
                    className={`icon ${hide}`}
                    onClick={() => setEditing(true)}>
                    <i className='fas fa-edit'></i>
                </button>
                <button
                    className={`icon ${hide}`}
                    onClick={() => removeTodoHandler(todo.id)}>
                    <i className='fas fa-eraser'></i>
                </button>
                <button
                    className={`icon ${!editing ? 'hide' : ''}`}
                    onClick={saveEditTodoHandler}>
                    <i className='fa-solid fa-xmark'></i>
                </button>
            </div>
        </div>
    );
}

export default TodoDetails;
