import React from "react";
import { useDispatch } from "react-redux";
import { handleComplete, handleDelete } from "../store/reducers/todoSlice";

const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center my-2">
      <div
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
        onClick={() => dispatch(handleComplete(id))}
      >
        Complete
      </div>
      <div className={`text-sm ${completed ? "line-through font-medium text-lime-400" : ""}`}>{text}</div>
      <div
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
        onClick={() => dispatch(handleDelete(id))}
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
