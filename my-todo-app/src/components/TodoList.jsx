import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
    // Renderiza uma lista de TodoItems
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index} // Chave para otimização do React
                    index={index}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
