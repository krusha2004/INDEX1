import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [showForm, setShowForm] = useState(false);
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('Incomplete');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddClick = () => {
        setShowForm(true);
        setTask('');
        setStatus('Incomplete');
        setIsEditing(false);
    };

    const handleCancel = () => {
        setShowForm(false);
        setTask('');
        setStatus('Incomplete');
        setIsEditing(false);
    };

    const handleSubmit = () => {
        if (task.trim() === '') return;

        const newTask = { name: task, status };

        if (isEditing) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = newTask;
            setTasks(updatedTasks);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setTasks([...tasks, newTask]);
        }

        setTask('');
        setStatus('Incomplete');
        setShowForm(false);
    };

    const handleEdit = (index) => {
        const taskToEdit = tasks[index];
        setTask(taskToEdit.name);
        setStatus(taskToEdit.status);
        setEditIndex(index);
        setIsEditing(true);
        setShowForm(true);
    };

    const handleDelete = (index) => {
        const filteredTasks = tasks.filter((_, i) => i !== index);
        setTasks(filteredTasks);
    };

    return (
        <div className="todo-container">
            <link rel="icon" href="https://i.pinimg.com/736x/92/c2/c6/92c2c6ca9d825360f713facbb783fb4a.jpg" />
            <h1>TODO LIST</h1>
            <button className="add-btn" onClick={handleAddClick}>ADD TASK</button>
            <select>
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>

            {showForm && (
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="Enter task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Complete">Complete</option>
                    </select>

                    <button className="add-btn" onClick={handleSubmit}>
                        {isEditing ? 'Update' : 'Add'}
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            )}

            <ul className="task-list">
                {tasks.map((t, index) => (
                    <li key={index}>
                        <span className="task-text">{t.name} - <strong>{t.status}</strong></span>
                        <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Todo;
