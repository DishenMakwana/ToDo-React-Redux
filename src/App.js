import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <>
            <main className='App'>
                <div className='container'>
                    <TodoForm />
                    <TodoList />
                </div>
            </main>
            <footer>
                Made By <a href='https://github.com/DishenMakwana'>DISHEN</a>
            </footer>
        </>
    );
}

export default App;
