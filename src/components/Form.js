import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { handleAdd } from "../store/reducers/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleAddHandler = (todoText) => {
    const todo = {
      id: v4(),
      text: todoText,
      completed: false,
    };

    dispatch(handleAdd(todo));
    setTodoText("");
  };

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={todoText}
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
        onClick={() => handleAddHandler(todoText)}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
