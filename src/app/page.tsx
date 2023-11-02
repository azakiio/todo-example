"use client";
import { useState } from "react";
import Header from "./Header";

export default function Home() {
  // let inputValue = "hello world";

  // EVENT user clicked the button
  // user wrote something in the input and pressed add

  function handleClick() {
    // 1. get the text in the from the input
    if (inputValue) {
      // 2. add it to the todolist
      setTodo([...todos, inputValue]);

      // 3. clear the input
      setInput("");
    }
  }

  const [todos, setTodo] = useState<string[]>([]);

  const [inputValue, setInput] = useState("");

  return (
    <main className="flex min-h-screen flex-col p-8">
      <Header className="text-4xl">My Todos</Header>

      <div className="flex mx-auto max-w-[20rem] w-full">
        <input
          className="px-4 py-2 rounded-lg w-full"
          value={inputValue}
          onInput={(event) => setInput(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4"
          onClick={handleClick}
        >
          Add
        </button>
      </div>

      <ul className="text-xl mt-8 max-w-lg">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="my-4 border-2 border-blue-400 flex gap-4">
              <button
                onClick={() => setTodo(todos.filter((todo, i) => index !== i))}
              >
                ✅
              </button>
              {todo}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
