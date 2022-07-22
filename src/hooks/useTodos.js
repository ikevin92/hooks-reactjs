import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || initialState
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  const handleoNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add todo',
      payload: todo
    }

    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove todo',
      payload: id
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle todo',
      payload: id
    }

    dispatch(action)
  }

  const todosCount = () => {

  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleoNewTodo,
    handleToggleTodo,
  }
}