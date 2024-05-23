import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
            <button onClick={() => toggleTodo(index)}>Completar</button>
            <button onClick={() => removeTodo(index)}>Remover</button>
        </div>
    );
}

export default TodoItem;
