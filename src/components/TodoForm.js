import React, { useRef } from 'react';
import TaskFilters from './TaskFilters';
import { addTodos } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './TodoForm.css';

function TodoForm() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            name: inputRef.current.value,
            completed: false,
        };

        if (newTodo.name.trim() === '') {
            return;
        }

        dispatch(addTodos(newTodo));
        inputRef.current.value = '';
    };

    return (
        <div className='container'>
            <form onSubmit={submitHandler} className='form'>
                <input
                    className='form_input'
                    id='todoText'
                    type='text'
                    maxLength={64}
                    placeholder='What needs to be done?'
                    ref={inputRef}></input>
            </form>
            <TaskFilters />
        </div>
    );
}

export default TodoForm;
