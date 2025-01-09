import React, { useState } from 'react';

const TodoList = ({ canAdd, canDelete }) => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const handleAddTodo = () => {
        if (canAdd && newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };
    
    const handleToggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    
    const handleDeleteTodo = (id) => {
        if(canDelete){
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };
    
    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
            {canAdd && <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Add a todo"
                    className="border rounded mr-2 p-2 flex-1"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={handleAddTodo}
                >
                    Add
                </button>
            </div>}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between border-b py-2">
                        <span
                            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        {canDelete && <button
                            className="text-red-500 hover:text-red-700 ml-2"
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            Delete
                        </button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { TodoList };  // Changed to named export