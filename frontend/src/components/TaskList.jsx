function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
              marginRight: "10px",
            }}
          >
            {task.title}
          </span>

          <button onClick={() => toggleComplete(task)}>
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={() => deleteTask(task._id)}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;