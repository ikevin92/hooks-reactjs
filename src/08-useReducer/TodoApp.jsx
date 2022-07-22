import { useEffect, useReducer } from 'react'
import { useTodos } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleoNewTodo } = useTodos()



  return (
    <>
      <h1>Todo App: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleoNewTodo } />
        </div>
      </div>
    </>
  )
}