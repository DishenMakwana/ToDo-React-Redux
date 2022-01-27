import React from 'react';
import { useSelector } from 'react-redux';
import TodoDetails from './TodoDetails';
import './TodoList.css';

function TodoList() {
    const { todoList, filter } = useSelector((state) => state);
    const filterOrder = filter;

    const allTodos =
        filterOrder === 'all' &&
        todoList.map((todo) => <TodoDetails key={todo.id} todo={todo} />);

    const completedTodos =
        filterOrder === 'completed' &&
        todoList
            .filter((todo) => todo.completed === true)
            .map((todo) => <TodoDetails key={todo.id} todo={todo} />);

    const activeTodos =
        filterOrder === 'active' &&
        todoList
            .filter((todo) => todo.completed === false)
            .map((todo) => <TodoDetails key={todo.id} todo={todo} />);

    return (
        <div className='todoList'>
            {allTodos}
            {completedTodos}
            {activeTodos}
        </div>
    );
}

export default TodoList;
