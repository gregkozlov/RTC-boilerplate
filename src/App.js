import React from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import User from "./components/User";
import Posts from "./components/Posts";
import { useSelector } from "react-redux";

function App() {
  const { todos } = useSelector((state) => state.todoSlice);

  return (
    <div className="min-h-screen h-full w-screen bg-indigo-400">
      <div className="container mx-auto px-4">
        <header className="flex gap-20 ">
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit State Change</h1>
            <User />
          </div>
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit Todo App</h1>
            <Form />
            {todos.map(({ id, text, completed }) => {
              return <TodoItem key={id} id={id} text={text} completed={completed} />;
            })}
          </div>
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit Async Thunk</h1>
            <Posts />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
