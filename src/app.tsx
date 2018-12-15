import { ActionsType, Component, h, View } from 'hyperapp'
import { Actions, State } from '@app/types'
import { Store } from '@app/store'
import './index.css'
import { TodoList } from '@app/todo/TodoList'
import { NewTodoForm } from '@app/todo/NewForm'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

export const view: View<State, Actions> = ({ todos }, actions) => (
  <main>
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTodoForm onAdd={actions.add} switchStateAll={actions.switchStateAll} />
      </header>
      <section className='main'>
        <TodoList todos={todos} onRemove={actions.remove} onSwitchState={actions.switchState} />
      </section>
    </section>
  </main>
)
