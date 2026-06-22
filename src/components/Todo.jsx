import { useState } from "react";
// ⬅️ React hook import ho raha hai jo dynamic data store karne ke liye use hota hai

function Todo() {
  const [task, setTask] = useState("");
  // ⬅️ Input field ki current value store karne ke liye state

  const [tasks, setTasks] = useState([]);
  // ⬅️ Yeh array state hai jisme tamam todo tasks store honge

  function addTask() {
    if (task === "") return;
    // ⬅️ Agar input khali ho to task add nahi hoga

    setTasks([...tasks, task]);
    // ⬅️ Purane tasks + naya task array me add ho raha hai

    setTask("");
    // ⬅️ Task add hone ke baad input field clear ho jayegi
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((item, i) => i !== index);
    // ⬅️ Jis index ka task delete karna hai usay filter se remove kar diya

    setTasks(newTasks);
    // ⬅️ Updated tasks state me set ho gaye
  }

  return (
    <div >
      {/* ⬅️ Main container */}

      <h1>React Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* ⬅️ Input field ki value state se bind hai */}

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>
      {/* ⬅️ Click karne par task array me add hoga */}

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
        {/* ⬅️ map() se array ke tamam tasks UI me show ho rahe hain */}
      </ul>
    </div>
  );
}

export default Todo;
// ⬅️ Component export ho raha hai
