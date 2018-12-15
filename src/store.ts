import { Actions, State, TodoItem } from '@app/types'
import { ActionsType } from 'hyperapp'

export namespace Store {
  export const state: State = {
    todos: []
  }

  export const actions: ActionsType<State, Actions> = {

    add: (text: string) => (state: State) => {
      // Prepare new TODO item
      const newTodo = { id: new Date().getTime().toString(), completed: false, title: text }
      // Create new partial state object for state update as result
      return { todos: [ newTodo ].concat(state.todos) }
    },

    remove: (todo: TodoItem) => (state: State) => {
      return { todos: state.todos.filter((curTodo) => curTodo.id !== todo.id) }
    },

    switchState: (todo: TodoItem) => (state: State) => {
      return {
        todos: state.todos.map((curTodo) => {
          if (curTodo.id === todo.id) {
            curTodo.completed = !curTodo.completed
          }
          return curTodo
        })
      } as State
    },

    switchStateAll: (completed: boolean) => (state: State) => {
      return { todos: state.todos.map((curTodo) => { curTodo.completed = completed; return curTodo }) }
    }
  }
}
