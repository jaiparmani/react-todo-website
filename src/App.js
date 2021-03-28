import React, { useState, useEffect } from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // STATE STUFF

  // adding a text state for the input
  // It's going to a string bcoz we are going to have our input text in string format.
  const [inputText, setInputText] = useState("");
  // setInputText is the function that updates the inputText
  // So I can use this inputText, a piece of state is available for me, every piece of state that we have, data in react automatically updates/renders itself for us.

  // adding a todos state for storing the todos.
  // It's going to be an array bcoz we are going to have an array of objects.
  const [todos, setTodos] = useState([]);

  // adding a status state for displaying the filtered todo list as All, Completed and Uncompleted.
  const [status, setStatus] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState([]);


  // RUN ONCE WHEN THE APP STARTS

  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT

  useEffect(() => {
    // console.log("hey");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  // FUNCTIONS AND EVENTS

  const filterHandler = () => {
    switch (status) {
      case `completed`:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case `uncompleted`:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //  NOTE: WE CAN ALWAYS PASS STATES AND PROPS DOWNWARDS INTO COMPONENTS.

  // Save to Local

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      // console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Sarjak's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      {/* Just taking setInputText from above and passing here in Form as an attribute. So we have access of that in Form.js */}

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
