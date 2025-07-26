import React, { useState } from 'react';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (title.trim() === "") 
    return;  

    if (isEditing) {
      const updatedTasks = tasks.map(task =>
        task.id === editId ? { ...task, title, status } : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        status,
      };
      setTasks([...tasks, newTask]);
    }
    
    setTitle("");
    setStatus("Incomplete");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setStatus(task.status);
    setIsEditing(true);
    setEditId(task.id);
    setShowForm(true);
  };


  const filteredTasks = tasks.filter(task => {
    if (filter === "All") return true;
    return task.status === filter;
  });


  return (
    <div className="p-4 max-w-md mx-auto relative">
      <h1 className='text-center mt-6 text-5xl text-gray-500 font-bold'>TODO LIST</h1>

      <div className="my-3 flex gap-[235px] mt-[30px] mb-[30px]">
        <button className='bg-blue-400 p-2 rounded-lg' onClick={() => setShowForm(true)}>Add Task</button>
        <select className='bg-gray-400' onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
      </div>


      {showForm && (
        <div className="mb-4 border p-3 bg-gray-100 w-[420px] h-[300px] absolute t-[150px]">
          <h2>{isEditing ? "Edit TODO" : "Add TODO"}</h2>
          <label htmlFor="title">Title</label><br />
          <input className='bg-white p-2 border border-black'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br />

          <label htmlFor="status">Status</label><br />
          <select className='bg-white p-2 w-[200px] mb-4'
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select><br />

          <button className='bg-blue-500 mr-4 p-2 rounded-lg' onClick={handleAddTask}>
            {isEditing ? "Update Task" : "Add Task"}
          </button>
          <button className='bg-blue-500 mr-4 p-2 rounded-lg' onClick={() => {
            setShowForm(false);
            setIsEditing(false);
            setTitle("");
            
          }}>
            Cancel
          </button>
        </div>
      )}

      <div>
        {filteredTasks.length === 0 ? (
          <h2 className='text-center font-bold text-4xl bg-gray-300 p-2'>No Todos</h2>
        ) : (
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center mb-2">
                <span>
                  <strong>{task.title}</strong> - {task.status}
                  
                </span>
                <span className="space-x-2">
                  <button onClick={() => handleEdit(task)}><i className="fa-solid fa-pencil"></i></button>
                  <button onClick={() => handleDelete(task.id)}><i className="fa-solid fa-trash"></i></button>
         
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todolist;