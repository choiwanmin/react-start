import { useState } from "react";

export const TodoAdd = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
};
