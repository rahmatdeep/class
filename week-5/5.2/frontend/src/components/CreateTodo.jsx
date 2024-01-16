/* eslint-disable no-unreachable */

import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        id="description"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added");
            props.fetchTodos();
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
