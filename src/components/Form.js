import React from 'react';

const Form = ({ todos, setTodos, InputText, setInputText, setStatus }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: InputText, completed: false, id: Math.random(Math.floor() * 100) },
    ])
    setInputText('')

  }

  const statusHandler = (event) => {
    setStatus(event.target.value)
  }

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={InputText}
        type="text"
        className="todo-input"
      />
      <button onClick={SubmitHandler} className="todo-button">
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
  )
}

export default Form;