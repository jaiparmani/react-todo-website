import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //  you can write props and then use setInputText as
  //  props.setInputText or just write {setInputText} and you can use setInputText directly.

  // Here I can write javascript code and funcitons
  // So writing a function that updates the state

  // inputTextHandler function runs everytime when there's a change in the input.
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  // submitTodoHandler function runs everytime when the submit button gets clicked.
  const submitTodoHandler = (e) => {
    // console.log("hello");
    e.preventDefault(); // this is to prevent the refreshing of out page on clicking the submit button. So when we click on submit button, our page will not get refresh everytime.
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]); // our setTodos state gets updated when we click on the submit button after writng some inputText.

    setInputText(""); // this is to reset our state as empty string again after submitting. Check in console, React Developer Tools -> Components.
  };

  // statusTodoHandler function runs everytime when there's a change in filtering option input area, i.e the select button.
const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);

};

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
