import { useState } from "react";

export const TodoList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.value,
          });
        }}
      />

      {isEditing ? (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>저장</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};
