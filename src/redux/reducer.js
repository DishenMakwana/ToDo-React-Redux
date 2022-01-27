import { createSlice } from '@reduxjs/toolkit';

const data = {
    todoList: [
        {
            id: 1,
            name: 'todo1',
            completed: false,
        },
        {
            id: 2,
            name: 'todo2',
            completed: false,
        },
        {
            id: 3,
            name: 'todo3',
            completed: true,
        },
        {
            id: 4,
            name: 'todo4',
            completed: false,
        },
        {
            id: 5,
            name: 'todo5',
            completed: true,
        },
    ],
};

export const initialState = { todoList: [...data.todoList], filter: 'all' };

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //adding todo
        addTodos: (state, action) => {
            state.todoList.push(action.payload);
        },

        //removing todo
        removeTodos: (state, action) => {
            state.todoList = state.todoList.filter(
                (todoList) => todoList.id !== action.payload
            );
        },

        //updating todo
        updateTodos: (state, action) => {
            state.todoList = state.todoList.map((todoList) => {
                if (todoList.id === action.payload.id) {
                    return { ...todoList, name: action.payload.todo };
                } else {
                    return todoList;
                }
            });
        },

        //checking todo
        checkTodos: (state, action) => {
            state.todoList = state.todoList.map((todoList) => {
                if (todoList.id === action.payload) {
                    return { ...todoList, completed: !todoList.completed };
                } else {
                    return todoList;
                }
            });
        },

        //change filter
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodos, removeTodos, updateTodos, checkTodos, changeFilter } =
    TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;
