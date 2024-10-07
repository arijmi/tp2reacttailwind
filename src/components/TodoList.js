import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to generate a unique ID for each task
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { id: generateId(), name: task };
      setTasks([...tasks, newTask]); // Add new task to the list
      setTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Liste des tâches</h1>

        {/* Task Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ajouter une tâche"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500"
          >
            Ajouter
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm">
              {/* Make the task name a clickable link that navigates to the details page */}
              <Link to={`/todos/${task.id}`} className="text-blue-600 hover:underline">
                {task.name}
              </Link>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-400"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
