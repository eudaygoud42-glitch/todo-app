
import { useState, useEffect } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

    // Store all tasks
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Save tasks in Local Storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Add new task
    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTasks([...tasks, newTask]);
    };

    // Complete or uncomplete task
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="app">

            <h1>My Todo App</h1>

            <TodoForm addTask={addTask} />

            <TodoList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />

        </div>
    );
}

export default App;
