import React from "react";

// TodoList is the Parent Component of Todo
const Todo = ({ text, todo, todos, setTodos }) => {
  // Events
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    // todos.filter will go through all the elements in the state and will check if the one which is deleted is the there or not. Elements whose key doesn't match will be discarded and rest other elements will be merged and displayed. Check in console, components.

    console.log(todo); // it console logs the exact thing that we delete.
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        // going over each item or todo in the state and checking
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            // ...item means it will have all the properties of the state, i.e completed, text, id, and we are modifying the completed property.
          };
        }
        return item;
      })
    );
  };


  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : '' }`}>{text}</li>

      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
