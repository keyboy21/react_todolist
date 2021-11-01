import React from 'react';
import Todo from './Todo'


const TodoList = ({ todos, setTodos,filterStatus }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterStatus.map(todo => (
          <Todo
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            text={todo.text}
            key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;