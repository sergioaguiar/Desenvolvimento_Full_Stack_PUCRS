import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const toggleTodo = index => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Lista de Afazeres</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
